import { useState } from 'react'

import { ScrollView } from '../Layout/ScrollView'
import { Language } from '../Common/Language'

// Get rid of it in future!
const languages = [
	{ language: 'C++' },
	{ language: 'Swift' },
	{ language: 'JavaScript' }, { language: 'TypeScript' }
] as const

/* Props
*/
type BetaProps = {
	onSelectLanguage: (language: string) => void
}

/* Component
*/
export const IHaveNotComeUpWithANameDontJudgeMeStrictly$0: React.FC<BetaProps> = (props) => {
	const { onSelectLanguage } = props
	const [selectedLanguage, setSelectedLanguage] = useState('')

	return (
		<ScrollView component='div'>
		{
			languages.map(
				(language) => (
					<Language key={language.language} language={language.language} isSelected={language.language === selectedLanguage}
						onClick={
							() => { setSelectedLanguage(language.language); onSelectLanguage(language.language) }
						}
					/>
				)
			)
		}
		</ScrollView>
	)
}

export type { BetaProps }
