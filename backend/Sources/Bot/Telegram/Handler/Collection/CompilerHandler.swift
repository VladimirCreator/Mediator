import Foundation
import Vapor
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

fileprivate let info = [
    "c++": (
        compiler: "g++", arguments: "elf64.cpp -o elf64",
        extension: "cpp"
    ),
    "swift": (
        compiler: "swiftc", arguments: "elf64.swift",
        extension: "swift"
    ),
    "javascript": (
        compiler: "bun", arguments: nil,
        extension: "js"
    ),
    "typescript": (
        compiler: "bun", arguments: nil,
        extension: "ts"
    )
]

internal let compileHandler: TGBaseHandler = .init() { update, bot in
    guard let message = update.message,
          let webAppData = message.webAppData?.data.data(using: .utf8)
    else {
        return
    }
    guard let recipe = try? JSONDecoder().decode(SwiftWebAppData.self, from: webAppData).data else { return}

    guard let `extension` = info[recipe.language],
        FileManager.default.createFile(atPath: "elf64.\(`extension`)", contents: recipe.text.data(using: .utf8))
    else {
        return
    }

    if let compiler = info[recipe.language]?.compiler,
       let data = try Process.run(compiler, arguments: info[recipe.language]?.arguments),
       let stdout = String(data: data, encoding: .utf8)
    {
        let params: TGSendMessageParams = .init(
            chatId: .chat(message.chat.id),
            text: "stdout:\n\(stdout)"
        )

        try? await bot.sendMessage(params: params)
        return
    }

    if let data = try? Process.run("./elf64", arguments: recipe.arguments, stdin: recipe.stdin),
       let stdout = String(data: data, encoding: .utf8)
    {
        try FileManager.default.removeItem(atPath: "./recipe")

        let params: TGSendMessageParams = .init(
            chatId: .chat(message.chat.id),
            text: "stdout:\n\(stdout)"
        )

        try? await bot.sendMessage(params: params)
    }
    else {
        let params: TGSendMessageParams = .init(
            chatId: .chat(message.chat.id),
            text: "Program does not print anything."
        )

        try? await bot.sendMessage(params: params)
    }
}
