/* Initially Modified: 06:01 AM Sat 30 Sep 2023
*/

import TelegramVaporBot

internal let startHandler: TGCommandHandler = .init(commands: ["start"]) { update, bot in
    guard let IHaveNotComeUpWithAName0: String = update.message?.chat.id else { return }

    let IHaveNotComeUpWithAName1: TGSendMessageParams = .init(
        chatId: .chat(IHaveNotComeUpWithAName0),
        text: "Text",
        replyMarkup: .replyKeyboardMarkup(
            .init(keyboard: tgKeyboardButton)
        )
    )

    try await bot.sendMessage(params: IHaveNotComeUpWithAName1)
}
