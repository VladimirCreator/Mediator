/* Initially Modified: 06:21 Sat 30 Sep 2023
*/

import Foundation
import TelegramVaporBot

internal let compileHandler: TGCommandHandler = .init(commands: ["compile"]) { update, bot in
    guard let IHaveNotComeUpWithAName0 = update.message?.chat.id else { return }
    guard let data = update.message?.webAppData else { return }

    let language: String = "C++"
    let recipe: String = """
                         #include <iostream>

                         int main(const int argc, const char **argv) {
                            std::cout << "Hello, world" << "\n";

                            for (int i = 0; i < argc; ++i) {
                                // argv[$0] is $1
                                std::cout << "argv[" << i+1 << "] is " << argv[i] << "\n";
                            }

                            return 0;
                         }
                         """
    let stdin: String = "hello world"

    let process: NSUserUnixTask = .init()
    try await process.execute(withArguments: stdin.split(" "))

    try bot.sendMessage(
        params: .init(
            chatId: .chat(IHaveNotComeUpWithAName0),
            text: String(data: process.standardOutput.readToEnd(), encoding: .utf8) ?? ""
        )
    )
}
