internal func routes(_ application: Application) -> Void {
    let telegramController: TelegramController = .init()

    try application.register(collection: telegramController)
}
