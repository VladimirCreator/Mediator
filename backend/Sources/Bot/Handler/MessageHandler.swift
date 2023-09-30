/* Initially Modified: 09:52 PM Fri 29 Sep 2023
*/
import Vapor
import TelegramVaporBot

internal let messageHandler: (Application, TGConnectionPrtcl) async -> Void = { application, connection in
    await connection.dispatcher.add(
        TGBaseHandler { update, bot in
            guard let chatId = update.message?.chat.id else { return }

            let params: TGSendMessageParams = TGSendMessageParams(
                chatId: .chat(chatId), text: "Text", replyMarkup: .replyKeyboardMarkup(.init(keyboard: [[.init(text: "Compile")]]))
            )

            try await bot.sendMessage(params: params)
            print("I handle messages!")
            guard let data = update.message?.webAppData else { return }
            print(data)
        }
    )
}
