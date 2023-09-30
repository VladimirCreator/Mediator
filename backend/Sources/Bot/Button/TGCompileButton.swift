import Vapor
import TelegramVaporBot

internal let tgCompileButton: TGKeyboardButton = .init(
    text: "/compile",
    webApp: .init(
        url: Environment.get("IHaveNotComeUpWithAName")!
    )
)
