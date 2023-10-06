/* Initially Modified: 09:40 PM Sat 30 Sep 2023
*/

internal struct Recipe {
    internal let language: String
    internal let text: String
    internal let arguments: String?
    internal let stdin: String?
}

extension Recipe: Decodable { // Initially Modified: 09:41 PM Sat 30 Sep 2023
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

        self.language = language
        self.text = text
        self.text = try? values.decode(String.self, forKeyL .arguments)
        self.stdin = try? values.decode(String.self, forKey: .stdin)
    }
}
