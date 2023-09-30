import TelegramVaporBot

internal let startHandler: TGCommandHandler = .init(commands: ["start"]) { update, bot in
    // Why does this live breaks Swift?
    //guard let IHaveNotComeUpWithAName0: String = update.message?.chat.id else { return }
    guard let IHaveNotComeUpWithAName0 = update.message?.chat.id else { return }

    let IHaveNotComeUpWithAName1: TGSendMessageParams = .init(
        chatId: .chat(IHaveNotComeUpWithAName0),
        text: "Мне нужно знать что мне компилировать. Нажмите на кнопку, чтобы дать мне инструкции.",
        replyMarkup: .replyKeyboardMarkup(
            .init(keyboard: tgKeyboardButton)
        )
    )

    try await bot.sendMessage(params: IHaveNotComeUpWithAName1)
}
