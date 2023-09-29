import Vapor

/*                                     this ⌄ `try` is actually for `.detect()`.
*/
fileprivate let application: Application = try .init(.detect())
internal let connection: TGBotConnection = .init()

try await configure(application)
try application.run()

defer { application.shutdown() }
