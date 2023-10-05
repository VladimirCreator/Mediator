import { Root, Trigger } from '@radix-ui/react-tabs'
import Picker from 'react-mobile-picker'

import { Language } from '../../TypeScript/Language'

import { Card } from '../Layout/Card'
import { SegmentedControl, Button } from '../Control/SegmentedControl'

const languages = [
    Language.cpp,
    Language.swift,
    Language.javascript,
    Language.typescript
]

type BetaProps = {
    onSelectLanguage: (language: string) => void
}

// Perfectoinism kills me.
export const IHaveNotComeUpWithANameDontJudgeMeStrictly$0: React.FC<BetaProps> = (props) => {
    const {
        onSelectLanguage
    } = props

    return (
        <Card component='section'>
            <Root onValueChange={onSelectLanguage}
                children={
                    <SegmentedControl>
                        {
                            languages.map(
                                (language) => (
                                    <Trigger key={language}
                                        value={language}
                                        asChild
                                    >
                                        <Button label={language} />
                                    </Trigger>
                                )
                            )
                        }
                    </SegmentedControl>
                }
            />
        </Card>
    )
}

export type { BetaProps }
