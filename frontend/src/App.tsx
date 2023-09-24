import {
    useState,
    useEffect
} from 'react';

import Card from './Component/Layout/Card';

import Picker from 'react-mobile-picker';
import * as Tabs from '@radix-ui/react-tabs';

import { UISegmentedControl } from './Component/UISegmentedControl';
import UIDisclosure from './Component/UIDisclosure';

export default function App() {
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

            <Card>
                <Picker value={pickerSelection} onChange={setPickerSelection} wheelMode='normal'>
                    <Picker.Column name={'language'}>
                        {
                            ['Swift', 'C++', 'JavaScript', 'TypeScript'].map(
                                (language) => (
                                    <Picker.Item key={language} value={language}>
                                        {language}
                                    </Picker.Item>
                                )
                            )
                        }
                    </Picker.Column>
                </Picker>
            </Card>

            <Card>
                <UISegmentedControl
                    tabs={
                        ['Text', 'File']
                    }
                    defaultValue='text'
                    text={
                        ($0: 'text') => (
                            <Tabs.Content value={$0}>
                                <textarea className='w-full h-64 bg-slate-200'
                                    onChange={(event) => setTarget(event.target.value)}
                                    placeholder={$0}
                                />
                            </Tabs.Content>
                        )
                    }
                    file={
                        ($0: 'file') => (
                            <Tabs.Content value={$0}>
                                <input className='block mx-auto'
                                    type='file'
                                    onChange={(event) => event.target.files?.item(0)?.text().then(text => setTarget(text))}
                                />
                            </Tabs.Content>
                        )
                    }
                />
            </Card>
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
