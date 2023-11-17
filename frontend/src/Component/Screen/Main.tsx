import { Card } from '../Layout/Card'
import { IHaveNotComeUpWithANameDontJudgeMeStrictly$0 } from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$0'
import { IHaveNotComeUpWithANameDontJudgeMeStrictly$1 } from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$1'
import { IHaveNotComeUpWithANameDontJudgeMeStrictly$2 } from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$2'
import { IHaveNotComeUpWithANameDontJudgeMeStrictly$3 } from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$3'

/* Props
*/
import type { BetaProps as Beta$0Props } from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$0'
import type { BetaProps as Beta$1Props } from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$1'
import type { BetaProps as Beta$2Props } from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$2'
import type { BetaProps as Beta$3Props } from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$3'

type BetaProps = Beta$0Props & Beta$1Props & Beta$2Props & Beta$3Props

/* Component
*/
export const Main: React.FC<BetaProps> = (props) => {
	const {
		onSelectLanguage,  onChangeRecipe,
		onChangeArguments, onChangeStdin
	} = props

	return (
		<>
			<Card component='section'>
				<IHaveNotComeUpWithANameDontJudgeMeStrictly$0 onSelectLanguage={onSelectLanguage} />
			</Card>

			<Card component='section'>
				<IHaveNotComeUpWithANameDontJudgeMeStrictly$1 onChangeRecipe={onChangeRecipe} />
			</Card>

			<Card component='section'>
				<IHaveNotComeUpWithANameDontJudgeMeStrictly$2 onChangeArguments={onChangeArguments} />
			</Card>

			<Card component='section'>
				<IHaveNotComeUpWithANameDontJudgeMeStrictly$3 onChangeStdin={onChangeStdin} />
			</Card>
		</>
	)
}
