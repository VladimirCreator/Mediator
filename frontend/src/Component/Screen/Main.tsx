import { IHaveNotComeUpWithANameDontJudgeMeStrictly$0 } from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$0'
import { IHaveNotComeUpWithANameDontJudgeMeStrictly$1 } from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$1'
import { IHaveNotComeUpWithANameDontJudgeMeStrictly$2 } from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$2'

import type { BetaProps as Beta$0Props } from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$0'
import type { BetaProps as Beta$1Props } from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$1'
import type { BetaProps as Beta$2Props } from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$2'

type BetaProps = Beta$0Props & Beta$1Props & Beta$2Props

export const Main: React.FC<BetaProps> = (props) => {
    const {
        onSelectLanguage,
        onChangeRecipe,
        onChangeStdin
    } = props

    return (
        <>
            <IHaveNotComeUpWithANameDontJudgeMeStrictly$0
                onSelectLanguage={onSelectLanguage}
            />
            <IHaveNotComeUpWithANameDontJudgeMeStrictly$1
                onChangeRecipe={onChangeRecipe}
            />
            <IHaveNotComeUpWithANameDontJudgeMeStrictly$2
                onChangeStdin={onChangeStdin}
            />
        </>
    )
}
