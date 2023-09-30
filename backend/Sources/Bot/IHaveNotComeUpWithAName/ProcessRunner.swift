/* Initially Modified: 09:59 PM Sat 30 Sep 2023
*/

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

    internal func execute(_ recipe: Recipe) throws {
        guard language == recipe.language else { nextRunner?.execute(recipe) }
        guard data = recipe.text.data(using: .utf8) else { return }

        guard FileManager.default.createFile(atPath: "./recipe.txt", contens: data) else { return }

        let compileProcess: Process = try .run(
            URL(fileURLWithPath: fileURLWithPath),
            arguments: arguments
        )
        compileProcess.waitUntilExit()

        let recipeProcess: Process = .init(); let pipe: Pipe = .init()
        recipeProcess.executableURL = URL(fileURLWithPath"./recipe")
        recipeProcess.arguments = recipeProcess.stdin.split(separator: " ").map { String($0) }
        recipeProcess.standardOutput = pipe

        try recipeProcess.run(); recipeProcess.waitUntilExit()
    }
}
