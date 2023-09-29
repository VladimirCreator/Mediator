import { useRef } from 'react';

import { Card } from '../Layout/Card';
import { Disclosure } from '../Compound Control/Disclosure';

type BetaProps = {
    onChangeStdin: (stdin: string) => void
}

// Perfectoinism kills me.
export const IHaveNotComeUpWithANameDontJudgeMeStrictly$2: React.FC<BetaProps> = (props) => {
    const {
        onChangeStdin
    } = props

    const inputRef: React.MutableRefObject<HTMLInputElement|null> = useRef(null);

    return (
        <Card>
            <Disclosure
                onOpenChange={handleOpenChange}
                children={
                    <input ref={inputRef} className='w-full bg-slate-200'
                        type='text'
                        onChange={(event) => onChangeStdin(event.target.value)}
                    />
                }
            />
        </Card>
    );

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
