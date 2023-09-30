import Foundation
import Vapor

internal class ProcessRunner {
    private let language: String
    private let fileURLWithPath: String
    private let arguments: [String]
    private let ext: String

    internal var nextRunner: ProcessRunner?

    internal init(language: String, fileURLWithPath: String, arguments: [String], ext: String) {
        self.language = language
        self.fileURLWithPath = fileURLWithPath
        self.arguments = arguments
        self.ext = ext
    }

    internal func execute(_ recipe: Recipe) throws -> (stdout: String?, stderr: String?) {
        guard let nextRunner else { return (stdout: nil, stderr: nil) }

        guard language == recipe.language else { return try nextRunner.execute(recipe) }
        guard let data = recipe.text.data(using: .utf8) else { return (stdout: nil, stderr: nil) }

        guard FileManager.default.createFile(atPath: "./recipe.\(ext)", contents: data) else { return (stdout: nil, stderr: nil) }

        let compileProcess: Process = .init()
        compileProcess.environment = .init()
        compileProcess.environment?["PATH"] = Environment.get("PATH")
        compileProcess.arguments = arguments

        for path in compileProcess.environment!["PATH"]!.split(separator: ":") {
            compileProcess.executableURL = URL(fileURLWithPath: "\(path)/\(fileURLWithPath)")
            do {
                try compileProcess.run(); compileProcess.waitUntilExit()
            }
            catch {

            }
        }

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
