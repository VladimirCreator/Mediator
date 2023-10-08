import { useState } from 'react'

import { ScrollView } from '../Layout/ScrollView'
import { Language } from '../Common/Language'

const languages = [
    {
        language: 'C++',
    },
    {
        language: 'Swift',
    },
    {
        language: 'JavaScript',
    },
    {
        language: 'TypeScript',
    }
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
                        <Language key={language.language}
                            isSelected={language.language === selectedLanguage}
                            language={language.language}
                            onClick={
                                () => {
                                    onSelectLanguage(language.language)
                                    setSelectedLanguage(language.language)
                                }
                            }
                        />
                    )
                )
            }
        </ScrollView>
    )
    //return (
    //    <Root onValueChange={onSelectLanguage}>
    //        <SegmentedControl>
    //        </SegmentedControl>
    //    </Root>
    //)
}

export type { BetaProps }
