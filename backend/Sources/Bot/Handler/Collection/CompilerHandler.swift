/* Initially Modified: 06:21 Sat 30 Sep 2023
*/

import Foundation
import TelegramVaporBot

internal let compileHandler: TGCommandHandler = .init(commands: ["compile"]) { update, bot in
    guard let IHaveNotComeUpWithAName0 = update.message?.chat.id else { return }
    //guard let data = update.message?.webAppData else { return }

    let language: String = "C++"
    let recipe: String = """
                         #include <iostream>

                         int main(const int argc, const char **argv) {
                            //std::cout << "Hello, world" << "\\n";

                            for (int i = 0; i < argc; ++i) {
                                // argv[$0] is $1
                                std::cout << "argv[" << i << "] is " << argv[i] << "\\n";
                            }

                            return 0;
                         }
                         """
    let stdin: String = "hello world"

    guard FileManager.default.createFile(atPath: "./recipe.cpp", contents: recipe.data(using: .utf8)!) else { return }

    let process = try Process.run(
        URL(fileURLWithPath: "/bin/g++"),
        arguments: ["./recipe.cpp", "-o", "./recipe"]
    )


    let recipeProcess: Process = .init()
    recipeProcess.executableURL = URL(fileURLWithPath: "./recipe")
    recipeProcess.arguments = stdin.split(separator: " ").map { String($0) }
    let pipe: Pipe = .init()

    recipeProcess.standardOutput = pipe; recipeProcess.standardError = pipe
    try recipeProcess.run()
    recipeProcess.waitUntilExit()

    guard let stdout = try? String(data: pipe.fileHandleForReading.readToEnd()!, encoding: .utf8) else {
        print("fail")
        return
    }


    try await bot.sendMessage(
        params: .init(
            chatId: .chat(IHaveNotComeUpWithAName0),
            text: "stdout:\n\(stdout)"
        )
    )
    print(stdout)
//
//    guard let fileHandle = recipeProcess.standardOutput as? FileHandle else { return }
//    guard let data = try fileHandle.readToEnd() else {
//        try await bot.sendMessage(
//            params: .init(
//                chatId: .chat(IHaveNotComeUpWithAName0),
//                text: "Recipe does not print anything."
//            )
//        )
//        return
//    }
//    //guard let stdout = String(data: data, encoding: .utf8) else { return }
//    try fileHandle.close()
//
}
