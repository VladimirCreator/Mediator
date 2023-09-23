// swift-tools-version:5.9
import PackageDescription

let package: Package = .init(
    name: "compiler_bot",
    products: [
        .executable(
            name: "compiler_bot",
            targets: [
                "compiler_bot"
            ]
        )
    ],
    dependencies: [
        .package(
            name: "TelegramBotSDK",
            url: "https://github.com/zmeyc/telegram-bot-swift.git",
            from: "2.0.0"
        )
    ],
    targets: [
        .executableTarget(
            name: "compiler_bot",
            dependencies: [
                "TelegramBotSDK"
            ]
        )
    ]
)
