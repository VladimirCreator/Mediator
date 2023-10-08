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
    const {
        onChangeArguments
    } = props

    const inputRef: React.MutableRefObject<HTMLInputElement|null> = useRef(null)

    return (
        <Disclosure label='arguments' className='space-y-2'
            onOpenChange={handleOpenChange}
            children={
                <input ref={inputRef} className='w-full bg-slate-200 font-mono p-2 rounded'
                    type='text'
                    onChange={(event) => onChangeArguments(event.target.value)}
                />
            }
        />
    )

    function handleOpenChange(open: boolean) {
        if (open) {
            inputRef.current?.focus()
        }
        else {
            inputRef.current?.blur()
        }
    }
}

export type { BetaProps }
