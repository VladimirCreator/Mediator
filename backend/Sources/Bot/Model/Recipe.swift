@propertyWrapper
internal struct Lowercased {
	private var string: String

	internal var wrappedValue: String {
		get { return string }
		set { string = newValue.lowercased }
	}

	init(wrappedValue: String) {
		string = wrappedValue
	}
}

internal struct Recipe {
	@Lowercased(wrappedValue: "")
	internal var language: String
	internal let text: String
	internal let arguments: String?
	internal let stdin: String?
}

extension Recipe: Decodable {
	private enum JSONKeys: String, CodingKey {
		case language
		case text
		case arguments
		case stdin
	}

	internal init(from decoder: Decoder) throws {
		let values = try decoder.container(keyedBy: JSONKeys.self)

		guard let language = try? values.decode(String.self, forKey: .language),
			  let text = try? values.decode(String.self, forKey: .text)
		else {
			fatalError("\(#function)")
		}

		self._language.wrappedValue = language
		self.text = text
		self.arguments = try? values.decode(String.self, forKey: .arguments)
		self.stdin = try? values.decode(String.self, forKey: .stdin)
	}
}
