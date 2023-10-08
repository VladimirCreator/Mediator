import { useRef } from 'react'
import { Disclosure } from '../Compound Control/Disclosure'

/* Props
*/
type BetaProps = {
    onChangeStdin: (stdin: string) => void
}

/* Component
*/
export const IHaveNotComeUpWithANameDontJudgeMeStrictly$3: React.FC<BetaProps> = (props) => {
    const {
        onChangeStdin
    } = props

    const inputRef: React.MutableRefObject<HTMLInputElement|null> = useRef(null)

    return (
        <Disclosure label='stdin' className='dark:text-white space-y-2'
            onOpenChange={handleOpenChange}
            children={
                <input ref={inputRef} className='w-full dark:text-white bg-slate-200 font-mono dark:bg-neutral-800 p-2 rounded'
                    type='text'
                    onChange={(event) => onChangeStdin(event.target.value)}
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
