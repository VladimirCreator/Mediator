import {
    useState,
    useEffect
} from 'react';

import { Card } from './Layout/Card';

import * as Tabs from '@radix-ui/react-tabs';

import { UISegmentedControl } from './Control/UISegmentedControl';
import UIDisclosure from './Compound Control/UIDisclosure';

import { IHaveNotComeUpWithANameDontJudgeMeStrictly$0 } from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$0';
import { IHaveNotComeUpWithANameDontJudgeMeStrictly$1 } from '../Compound Component/IHaveNotComeUpWithANameDontJudgeMeStrictly$1';

export const Main: React.FC = () => {
    const [pickerSelection, setPickerSelection] = useState(
        {
            language: 'Swift'
        }
    );
    const [target, setTarget] = useState('');
    const [stdin, setStdin] = useState('');

    useEffect(() => {
        if (pickerSelection.language.length === 0 || target.length === 0) {
            return;
        }
        //window.Telegram.WebApp.MainButton.show();
    }, [pickerSelection.language, target, stdin]);

    return (
        <>
            <Card className='hidden'>
                <aside>
                    <p>Language: {pickerSelection.language}</p>
                    <p>Target: {true ? target : ''}</p>
                    <p>stdin: {stdin}</p>

                    <button className='text-red-500' type='button'>
                        Send to bot
                    </button>
                </aside>
            </Card>

            <IHaveNotComeUpWithANameDontJudgeMeStrictly$0 />
            <IHaveNotComeUpWithANameDontJudgeMeStrictly$1 />

            <Card>
                <UIDisclosure
                    children={
                        <>
                            <input className='w-full bg-slate-200
                        '
                                type='text'
                                onChange={(event) => setStdin(event.target.value)}
                            />
                        </>
                    }
                />
            </Card>
        </>
    );
}
