import Vapor
import TelegramVaporBot

internal func configure(_ application: Application) async throws -> Void {
    guard let compilerBotToken: String = Environment.get("COMPILER_BOT_TOKEN") else {
        fatalError("\(#function)")
    }

    let bot: TGBot = .init(
        app: application,
        botId: compilerBotToken
    )

    await connection.setConnection(try await TGLongPollingConnection(bot: bot))
    try await connection.connection.start()

    await attachHandlers(for: application, using: connection.connection)

    try routes(application)
}
