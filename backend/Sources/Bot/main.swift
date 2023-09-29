import Vapor
import TelegramVaporBot

/*                                     this ⌄ `try` is actually for `.detect()`.
*/
fileprivate let application: Application = try .init(.detect())
internal let connection: TGBotConnection = .init()

try application.run()

defer { application.shutdown() }
