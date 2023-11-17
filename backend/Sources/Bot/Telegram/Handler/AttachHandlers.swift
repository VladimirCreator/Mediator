import Vapor
import TelegramVaporBot

internal func attachHandlers(for application: Application, using connection: TGConnectionPrtcl) async -> Void {
	await connection.dispatcher.add(startHandler)
	await connection.dispatcher.add(compileHandler)
}
