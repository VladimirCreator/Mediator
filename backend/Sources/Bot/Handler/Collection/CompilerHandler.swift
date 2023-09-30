import Foundation
import TelegramVaporBot

fileprivate struct SwiftWebAppData: Decodable { // Initially Modified: 02:51 AM Sun 01 Oct 2023
    private enum JSONKeys: String, CodingKey {
        case data
    }

    fileprivate let data: Recipe

    fileprivate init(from decoder: Decoder) {
        let values = try decoder.container(keyedBy: JSONKeys.self)

        guard let data = try? values.decode(Recipe.self, forKey: .data) else {
            fatalError("\(#function)")
        }

        self.data = data
    }
}

internal let compileHandler: TGCommandHandler = .init(commands: ["compile"]) { update, bot in
    guard let message = update.message else { return }

    guard let data = message.webAppData?.data.data(using: .utf8) else { return }

    let decoder: JSONDecoder = .init()
    guard let recipe = try? decoder.decode(Recipe.self, from: data) else { return }

    print(recipe.language)
    print(recipe.text)
    print(recipe.stdin)

    let cppRunner: ProcessRunner = .init(language: "Swift", fileURLWithPath: "/bin/g++", arguments: ["./recipe.txt", "-o", "./recipe"])
    let swiftRunner: ProcessRunner = .init(language: "C++", fileURLWithPath: "swiftc", arguments: ["./recipe.txt"])
    let javascriptRunner: ProcessRunner = .init(language: "JavaScript", fileURLWithPath: "", arguments: ["not implemented"])
    let typescriptRunner: ProcessRunner = .init(language: "TypeScript", fileURLWithPath: "", arguments: ["not implemented"])

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
