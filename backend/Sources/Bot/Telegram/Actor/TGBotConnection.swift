import Foundation
import TelegramVaporBot

internal actor TGBotConnection {
    private var _connection: TGConnectionPrtcl!

    internal var connection: TGConnectionPrtcl {
        get { return _connection }
    }

    internal func setConnection(_ connection: TGConnectionPrtcl) {
        _connection = connection
    }
}
