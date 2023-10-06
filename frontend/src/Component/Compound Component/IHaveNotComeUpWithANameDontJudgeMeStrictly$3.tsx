import { useRef } from 'react';
import { Disclosure } from '../Compound Control/Disclosure';

type BetaProps = {
    onChangeStdin: (stdin: string) => void
}

// Perfectoinism kills me.
export const IHaveNotComeUpWithANameDontJudgeMeStrictly$3: React.FC<BetaProps> = (props) => {
    const {
        onChangeStdin
    } = props

    const inputRef: React.MutableRefObject<HTMLInputElement|null> = useRef(null);

    return (
        <Disclosure label='stdin' className='space-y-2'
            onOpenChange={handleOpenChange}
            children={
                <input ref={inputRef} className='w-full bg-slate-200 font-mono p-2 rounded'
                    type='text'
                    onChange={(event) => onChangeStdin(event.target.value)}
                />
            }
        />
    )

    function handleOpenChange(open: boolean) {
        if (open) {
            inputRef.current?.focus();
        }
        else {
            inputRef.current?.blur();
        }
    }
}

export type { BetaProps }
