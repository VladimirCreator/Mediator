import Foundation
import TelegramVaporBot

fileprivate struct SwiftWebAppData: Decodable { // Initially Modified: 02:51 AM Sun 01 Oct 2023
    private enum JSONKeys: String, CodingKey {
        case data
    }

    fileprivate let data: Recipe

    fileprivate init(from decoder: Decoder) throws {
        let values = try decoder.container(keyedBy: JSONKeys.self)

        guard let data = try? values.decode(Recipe.self, forKey: .data) else {
            fatalError("\(#function)")
        }

        self.data = data
    }
}

internal let compileHandler: TGBaseHandler = .init() { update, bot in
    guard let message = update.message else { return }
    guard let data = message.webAppData?.data.data(using: .utf8) else { return }

    let decoder: JSONDecoder = .init()
    guard let recipe = try? decoder.decode(SwiftWebAppData.self, from: data).data else { return }

    let cppRunner: ProcessRunner = .init(language: "C++", fileURLWithPath: "g++", arguments: ["./recipe.cpp", "-o", "./recipe"], ext: "cpp")
    let swiftRunner: ProcessRunner = .init(language: "Swift", fileURLWithPath: "swiftc", arguments: ["./recipe.swift"], ext: "swift")
    let javascriptRunner: ProcessRunner = .init(language: "JavaScript", fileURLWithPath: "", arguments: ["not implemented"], ext: "")
    let typescriptRunner: ProcessRunner = .init(language: "TypeScript", fileURLWithPath: "", arguments: ["not implemented"], ext: "")

    cppRunner.nextRunner = swiftRunner
    swiftRunner.nextRunner = javascriptRunner
    javascriptRunner.nextRunner = typescriptRunner

    let (stdout, stderr): (stdout: String?, stderr: String?) = try cppRunner.execute(recipe)

    if let stdin {
        try await bot.sendMessage(
            params: .init(
                chatId: .chat(message.chat.id),
                text: "stdout:\n\(stdout)"
            )
        )
    }
    else {
        try await bot.sendMessage(
            params: .init(
                chatId: .chat(message.chat.id),
                text: "Program does not print anything or an error occured."
            )
        )
    }
}
