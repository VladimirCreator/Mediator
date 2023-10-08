/* Initially Modified: 09:39 PM Sun 08 Oct 2023 */

import Foundation
import XCTest

@testable import Bot

internal final class BotTests: XCTestCase {
    internal func test0() { // Last Modified: 09:46 PM Sun 08 Oct 2023
        let elf64Swift = FileManager.default.createFile(
            atPath: "elf64.swift",
            contents: "fileprivate let variable: Bool = true".data(using: .utf8)!
        )
        let data = try? Process.run("swiftc", arguments: "elf64.swift")

        XCTAssertEqual(elf64Swift, true)
        XCTAssertEqual(data, nil)
    }

    internal func test1() { // Initially Modified: 10:31 PM Sun 08 Oct 2023
                            //      Last Modified: 10:34 PM Sun 08 Oct 2023
        let elf64Swift = FileManager.default.createFile(
            atPath: "elf64.js",
            contents: "console.log('vladimir')".data(using: .utf8)!
        )
        let data = try? Process.run("bun", arguments: "elf64.js")
        let string = String(data: data!, encoding: .utf8)

        XCTAssertEqual(elf64Swift, true)
        XCTAssertNotNil(data)
        XCTAssertEqual(string, "vladimir\n")
    }

    internal func test2() { // Initially Modified: 10:36 PM Sun 08 Oct 2023
                            // Initially Modified: 10:3[8-9] PM Sun 08 Oct 2023
        let elf64Swift = FileManager.default.createFile(
            atPath: "elf64.swift",
            contents: "print(\"vladimir\")".data(using: .utf8)!
        )
        let data = try? Process.run("swiftc", arguments: "elf64.swift")
        let dataStdout = try? Process.run("./elf64")
        let stdout = String(data: dataStdout!, encoding: .utf8)

        XCTAssertEqual(elf64Swift, true)
        XCTAssertEqual(data, nil)
        XCTAssertEqual(stdout, "vladimir\n")
    }
}
