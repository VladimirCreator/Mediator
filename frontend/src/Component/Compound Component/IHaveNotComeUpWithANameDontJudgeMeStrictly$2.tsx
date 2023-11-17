import { useRef } from 'react'
import { Disclosure } from '../Compound Control/Disclosure'

/* Props
*/
type BetaProps = {
	onChangeArguments: (stdin: string) => void
}

/* Component
*/
export const IHaveNotComeUpWithANameDontJudgeMeStrictly$2: React.FC<BetaProps> = (props) => {
	const { onChangeArguments } = props

	const inputRef: React.MutableRefObject<HTMLInputElement> = useRef(null!)

	const handleOpenChange = (open: boolean) => {
		if (open) inputRef.current?.focus(); else inputRef.current?.blur()
	}

	return (
		<Disclosure label='arguments' className='dark:text-white space-y-2'
			children={
				<input ref={inputRef} className='w-full dark:text-white bg-slate-200 dark:bg-neutral-800 font-mono p-2 rounded'
					type='text' onChange={(event) => onChangeArguments(event.target.value)}
				/>
			}
			onOpenChange={handleOpenChange}
		/>
	)
}

export type { BetaProps }
