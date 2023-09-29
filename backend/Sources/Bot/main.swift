import Foundation
import Vapor
import TelegramVaporBot
//
//fileprivate let token = readToken(from: "COMPILER_BOT_TOKEN")
//fileprivate let bot: TelegramBot = .init(token: token)
//
//fileprivate let router: Router = .init(bot: bot) // Initially Modified: 02:21 PM Sat 23 Sep 2023
//router["compile"] = { context in
//    guard let user = context.message?.from else { return false }
//    context.respondAsync("Hello, \(user.firstName)")
//
//    return true
//}
//router["sendData"] = { context in
//    guard let data = context.message?.webAppData else { return false }
//
//    print(data)
//
//    return true
//}
//
//
//while let update = bot.nextUpdateSync() {
//    do {
//        try router.process(update: update)
//    }
//    catch {
//        print("\(#function)")
//    }
//}
