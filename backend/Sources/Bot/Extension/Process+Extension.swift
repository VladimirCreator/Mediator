/* Initially Modified: 03:27 AM Wed 04 Oct 2023
        Last Modified: 01:25 PM Wed 04 Oct 2023
        Last Modified: 01:53 PM Wed 04 Oct 2023
        Last Modified: 02:08 PM Wed 04 Oct 2023
*/
import Foundation

internal extension Process {
    internal typealias Builder = (Process) -> Void // Initially Modified: 03:37 AM Wed 04 Oct 2023

    internal enum ProcessError: Error {
        case unknownError(Data?)
    }

    internal static func run(_ builder: Builder, onTermination: @escaping (Result<Data?, ProcessError>) -> Void) -> Void {
        let pipe: Pipe = .init()
        let instance: Process = .init()

        instance.standardInput = nil
        instance.standardOutput = pipe; instance.standardError = pipe
        instance.terminationHandler = { _ in
            guard let data = try? pipe.fileHandleForReading.readToEnd() else {
                onTermination(.success(nil))
                return
            }
            onTermination(.success(data))
        }
        builder(instance)

        do {
            try instance.run()
        }
        catch {
            //if let data = try? instance.fileHandleForReading.readToEnd() {
            //    onTermination(.failure(ProcessError.unknownError(data)))
            //}
            //else {
                onTermination(.failure(ProcessError.unknownError(nil)))
            //}
        }

        instance.waitUntilExit()
    }
}
