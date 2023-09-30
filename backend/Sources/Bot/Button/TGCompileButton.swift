/* Initially Modified: 05:42 AM Sat 30 Sep 2023
*/
import Vapor
import TelegramVaporBot

internal let tgCompileButton: TGKeyboardButton = .init(
    text: "/compile",
    webApp: .init(
        url: Environment.get("IHaveNotComeUpWithAName")!
    )
)
