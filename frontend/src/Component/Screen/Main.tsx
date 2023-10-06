import { Card } from '../Layout/Card'

import {
    IHaveNotComeUpWithANameDontJudgeMeStrictly$0,
    type BetaProps as Beta$0Props
} from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$0'

import {
    IHaveNotComeUpWithANameDontJudgeMeStrictly$1,
    type BetaProps as Beta$1Props
} from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$1'

import {
    IHaveNotComeUpWithANameDontJudgeMeStrictly$2,
    type BetaProps as Beta$2Props
} from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$2'

import {
    IHaveNotComeUpWithANameDontJudgeMeStrictly$3,
    type BetaProps as Beta$3Props
} from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$3'

type BetaProps = Beta$0Props & Beta$1Props & Beta$2Props & Beta$3Props

export const Main: React.FC<BetaProps> = (props) => {
    const {
        onSelectLanguage,
        onChangeRecipe,
        onChangeArguments,
        onChangeStdin,
    } = props

    return (
        <>
            <Card component='section'>
                <IHaveNotComeUpWithANameDontJudgeMeStrictly$0
                    onSelectLanguage={onSelectLanguage}
                />
            </Card>

            <Card component='section'>
                <IHaveNotComeUpWithANameDontJudgeMeStrictly$1
                    onChangeRecipe={onChangeRecipe}
                />
            </Card>

            <Card component='section'>
                <IHaveNotComeUpWithANameDontJudgeMeStrictly$2
                    onChangeArguments={onChangeArguments}
                />
            </Card>

            <Card component='section'>
                <IHaveNotComeUpWithANameDontJudgeMeStrictly$3
                    onChangeStdin={onChangeStdin}
                />
            </Card>
        </>
    )
}
