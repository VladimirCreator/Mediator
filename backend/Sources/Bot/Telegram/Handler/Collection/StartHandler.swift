import TelegramVaporBot

internal let startHandler: TGCommandHandler = .init(commands: ["start"]) { update, bot in
    guard let id = update.message?.chat.id else { return }

    try await bot.sendMessage(
        params: .init(
            chatId: .chat(id),
            text: """
                  Приятно познакомиться!
                  Даю кнопку, которая при нажатии позволяет указать необходимые атрибуты рецепта. Она находится ниже.
                  Нажми, чтобы начать!
                  """
            ,
            replyMarkup: .replyKeyboardMarkup(
                .init(keyboard: tgKeyboardButton, isPersistent: true)
            )
        )
    )
}
