// swift-tools-version:5.8
import PackageDescription

fileprivate let package: Package = .init(
    name: "Bot",
    dependencies: [
        .package(url: "https://github.com/vapor/vapor.git", from: "4.76.0")
    ],
    targets: [
        .executableTarget(
            name: "Bot",
            dependencies: [
                .product(name: "Vapor", package: "vapor")
            ]
        )
    ]
)
