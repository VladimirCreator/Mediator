import Vapor
import TelegramVaporBot

internal func configure(_ application: Application) async throws -> Void {
    guard let compilerBotToken: String = Environment.get("COMPILER_BOT_TOKEN") else { fatalError("\(#function)") }
    let bot: TGBot = .init(app: application, botId: compilerBotToken)

    try await botConnection.setConnection(await TGLongPollingConnection(bot: bot))
    try await botConnection.connection.start()

    await attachHandlers(for: application, using: botConnection.connection)

    try routes(application)
}
