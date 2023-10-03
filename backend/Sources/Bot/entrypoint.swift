import Vapor
import TelegramVaporBot

internal let botConnection: TGBotConnection = .init()

@main
fileprivate enum Entrypoint {
    fileprivate static func main() async throws -> Void {
        let application: Application = try .init(.detect()); defer { application.shutdown() }

        try await configure(application)
        try await application.runFromAsyncMainEntrypoint()
    }
}

private extension Application {
    static let baseExecutionQueue = DispatchQueue(label: "vapor.codes.entrypoint")

    fileprivate func runFromAsyncMainEntrypoint() async throws {
        try await withCheckedThrowingContinuation { continuation in
            Application.baseExecutionQueue.async { [self] in
                do {
                    try self.run()
                    continuation.resume()
                }
                catch {
                    continuation.resume(throwing: error)
                }
            }
        }
    }
}
