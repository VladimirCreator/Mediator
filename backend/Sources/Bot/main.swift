import Vapor
import TelegramVaporBot

/*                                     this ⌄ `try` is actually for `.detect()`.
*/
fileprivate let application: Application = try .init(.detect())

fileprivate let connection: TGBotConnection = .init()

fileprivate let bot: TGBot = .init(
    app: application,
    // I do not like the naming.
    botId: Environment.get("COMPILER_BOT_TOKEN") ?? ""
)

await connection.setConnection(try await TGLongPollingConnection(bot: bot))
try await connection.connection.start()

try application.run()

defer { application.shutdown() }
