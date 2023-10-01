import Vapor
import TelegramVaporBot

internal final class TelegramController: RouteCollection {
    internal func boot(routes: RoutesBuilder) throws {
        routes.post("telegramWebHook", use: telegramWebHook)
    }
}

internal extension TelegramController {
    internal func telegramWebHook(_ request: Request) async throws -> Bool {
        let update: TGUpdate = try request.content.decode(TGUpdate.self)

        return try await connection.connection.dispatcher.process(
            [update]
        )
    }
}
