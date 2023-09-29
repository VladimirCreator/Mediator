/* Initially Modified: 09:52 PM Fri 29 Sep 2023
*/
import Vapor
import TelegramVaporBot

internal let messageHandler: (Application, TGConnectionPrtcl) async -> Void = { application, connection in
    await connection.dispatcher.add(
        TGMessageHandler { update, bot in
            print("I handle messages!")
            guard let data = update?.message.webAppData else { fatalError("\(#function)") }
            print(data.webAppData)
        }
    )
}
