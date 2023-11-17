import Foundation
import XCTest

@testable import Bot

internal final class BotTests: XCTestCase {
	internal func test0() {
		let elf64Swift = FileManager.default.createFile(
			atPath: "elf64.swift",
			contents: "fileprivate let variable: Bool = true".data(using: .utf8)!
		)
		let data = try? Process.run("swiftc", arguments: "elf64.swift")

		XCTAssertEqual(elf64Swift, true)
		XCTAssertEqual(data, nil)
	}

	internal func test1() {
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

	internal func test2() {
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
