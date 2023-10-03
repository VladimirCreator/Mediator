import Vapor
import TelegramVaporBot

internal let botConnection: TGBotConnection = .init()

@main
fileprivate enum Entrypoint {
    fileprivate static func main() async throws -> Void {
        let application: Application = try .init(.detect()); defer { application.shutdown() }

        try await configure(application)
        try application.run()
    }
}
