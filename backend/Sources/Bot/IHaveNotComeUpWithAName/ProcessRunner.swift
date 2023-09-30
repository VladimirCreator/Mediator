import Foundation

internal class ProcessRunner {
    private let language: String
    private let fileURLWithPath: String
    private let arguments: [String]

    internal var nextRunner: ProcessRunner?

    internal init(language: String, fileURLWithPath: String, arguments: [String]) {
        self.language = language
        self.fileURLWithPath = fileURLWithPath
        self.arguments = arguments
    }

    internal func execute(_ recipe: Recipe) throws -> (stdout: String?, stderr: String?) {
        guard let nextRunner else { return (stdout: nil, stderr: nil) }
        guard language == recipe.language else { return try nextRunner.execute(recipe) }
        guard let data = recipe.text.data(using: .utf8) else { return (stdout: nil, stderr: nil) }

        guard FileManager.default.createFile(atPath: "./recipe.txt", contents: data) else { return (stdout: nil, stderr: nil) }

        let compileProcess: Process = try .run(
            URL(fileURLWithPath: fileURLWithPath),
            arguments: arguments
        )
        compileProcess.waitUntilExit()

        let recipeProcess: Process = .init(); let pipe: Pipe = .init()
        recipeProcess.executableURL = URL(fileURLWithPath: "./recipe")
        recipeProcess.arguments = recipe.stdin?.split(separator: " ").map { String($0) }
        recipeProcess.standardOutput = pipe

        try recipeProcess.run(); recipeProcess.waitUntilExit()

        if let data = try? pipe.fileHandleForReading.readToEnd(),
           let stdout = try? String(data: data, encoding: .utf8) {
            return (stdout: stdout, stderr: nil)
        }
        else {
            return (stdout: nil, stderr: nil)
        }
    }
}
