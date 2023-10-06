import Foundation

internal extension Process {

    internal static func run(_ executor: String, arguments: String? = nil, stdin: String? = nil) throws -> Data? {
        let pipe: Pipe = .init()
        let instance: Process = .init()

        instance.executableURL = .init(fileURLWithPath: "/bin/bash")
        instance.arguments = [
            "-c", "\(executor) \(arguments ?? "") \(stdin != nil ? "<<< \(stdin!)": "")"
        ]
        instance.standardOutput = pipe

        try instance.run()
            instance.waitUntilExit()

        return try? pipe.fileHandleForReading.readToEnd()
    }

}
