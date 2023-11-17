import Vapor
import TelegramVaporBot

internal let tgConfigureButton: TGKeyboardButton = .init(
	text: "Configure",
	webApp: .init(
		url: Environment.get("IHaveNotComeUpWithAName")!
	)
)
