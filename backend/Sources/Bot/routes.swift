import Vapor

internal func routes(_ application: Application) throws -> Void {
    let telegramController: TelegramController = .init()

    try application.register(collection: telegramController)
}
