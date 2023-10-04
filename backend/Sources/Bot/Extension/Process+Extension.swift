import Foundation

internal extension Process {
    internal typealias Builder = (Process) -> Void // Initially Modified: 03:37 AM Wed 04 Oct 2023

    internal enum ProcessError: Error {
        case unknownError(Data?)
    }

    internal static func run(using builder: Builder, onTermination: @escaping (Result<Data?, ProcessError>) async -> Void) -> Void {
        let pipe: Pipe = .init()
        let instance: Process = .init()

        instance.standardInput = nil
        instance.standardOutput = pipe; instance.standardError = pipe
        instance.terminationHandler = { _ in
            guard let data = try? pipe.fileHandleForReading.readToEnd() else {
                Task {
                    await onTermination(.success(nil))
                }
                return
            }
            Task {
                await onTermination(.success(data))
            }
        }
        builder(instance)

        do {
            try instance.run()
        }
        catch {
            //if let data = try? instance.fileHandleForReading.readToEnd() {
            //    await onTermination(.failure(ProcessError.unknownError(data)))
            //}
            //else {
                Task {
                    await onTermination(.failure(ProcessError.unknownError(nil)))
                }
            //}
        }

        instance.waitUntilExit()
    }
}
