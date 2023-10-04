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

//fileprivate let

// Future:
// let delegate: [String: Process.Builder] = [
//     "C++": {
//         $0.fileURLWithPath = URL(fileURLWithPath: "g++")
//         $0.arguments = ["recipe.cpp", "-o", "recipe"]
//     },
//     "Swift": {
//         $0.fileURLWithPath = URL(fileURLWithPath: "swiftc")
//         $0.arguments = ["recipe.swift"]
//     },
//     "JavaScript": {
//         $0.fileURLWithPath = URL(fileURLWithPath: "bun")
//         $0.arguments = ["recipe.js"]
//     },
//     "TypeScript": {
//         $0.fileURLWithPath = URL(fileURLWithPath: "bun")
//         $0.arguments = ["recipe.ts"]
//     }
// ]
// Process.run(delegate[recipe.language])
//

fileprivate let compilers: [String: Process.Builder] = [
     "c++": {
        $0.executableURL = URL(fileURLWithPath: "/bin/bash")
        $0.arguments = ["-c", "g++ recipe.cpp -o recipe"]
     },
     "swift": {
        $0.executableURL = URL(fileURLWithPath: "/bin/bash")
        $0.arguments = ["-c", "swiftc recipe.swift"]
     },
     "javascript": {
        $0.executableURL = URL(fileURLWithPath: "/bin/bash")
        $0.arguments = ["-c", "bun recipe.js"]
     },
     "typescript": {
        $0.executableURL = URL(fileURLWithPath: "/bin/bash")
        $0.arguments = ["-c", "bun recipe.ts"]
     }
]

fileprivate let executors: [String: Process.Builder] = [ // Initially Modified: 02:35 PM Wed 04 Oct 2023
     "c++": { $0.executableURL = URL(fileURLWithPath: "./recipe") },
     "swift": { $0.executableURL = URL(fileURLWithPath: "./recipe") },
     "javascript": { $0.executableURL = URL(fileURLWithPath: "./recipe") },
     "typescript": { $0.executableURL = URL(fileURLWithPath: "./recipe") }
]

fileprivate let extensions: [String: String] = [
    "c++": "cpp",
    "swift": "swift",
    "javascript": "js",
    "typescript": "ts"
]

internal let compileHandler: TGBaseHandler = .init() { update, bot in
    guard let message = update.message else { return }
    //                               this ↓↓ is an instance of `String`
    guard let data = message.webAppData?.data.data(using: .utf8) else { return }

    guard let recipe = try? JSONDecoder().decode(SwiftWebAppData.self, from: data).data else { return }
    guard let ext = extensions[recipe.language.lowercased] else { return }
    guard FileManager.default.createFile(atPath: "recipe.\(ext)", contents: recipe.text.data(using: .utf8)) else {
        print("Файл для компиляции не создан")
        return
    }
    guard let compiler = compilers[recipe.language.lowercased] else { return }
    guard let executor = executors[recipe.language.lowercased] else { return }

    Process.run(using: compiler) {
        switch $0 {
        case .success(let data):
            guard let data else { return }

            if let stdout = String(data: data, encoding: .utf8) {
                try? await bot.sendMessage(
                    params: .init(
                        chatId: .chat(message.chat.id),
                        text: "stdout:\n\(stdout)"
                    )
                )
            }
            //else {
            //    try? await bot.sendMessage(
            //        params: .init(
            //            chatId: .chat(message.chat.id),
            //            text: "Program does not print anything."
            //        )
            //    )
            //}

        case .failure(let data):
            try? await bot.sendMessage(
                params: .init(
                    chatId: .chat(message.chat.id),
                    text: "There is not such a compiler!"
                )
            )
        }
    }

    Process.run(using: executor) {
        try? FileManager.default.removeItem(atPath: "./recipe")
        switch $0 {
        case .success(let data):
            guard let data else { return }

            if let stdout = String(data: data, encoding: .utf8) {
                try? await bot.sendMessage(
                    params: .init(
                        chatId: .chat(message.chat.id),
                        text: "stdout:\n\(stdout)"
                    )
                )
            }
            else {
                try? await bot.sendMessage(
                    params: .init(
                        chatId: .chat(message.chat.id),
                        text: "Program does not print anything."
                    )
                )
            }

        case .failure(let data):
            print("Make sure your program is correct!")
            if case let .unknownError(stderr) = data {
                print(stderr)
            }
            //try? await bot.sendMessage(
            //    params: .init(
            //        chatId: .chat(message.chat.id),
            //        text: "Make sure your program is correct!"
            //    )
            //)
        }
    }
}
