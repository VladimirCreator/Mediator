import { useState } from 'react';

import Picker from 'react-mobile-picker';

import UIPicker from './Component/UIPicker';
import UIDisclosure from './Component/UIDisclosure';

export default function App() {
    const [pickerSelection, setPickerSelection] = useState(
        {
            language: 'Swift'
        }
    );

    return (
        <>
            <aside className='hidden_'>
                <p>
                    Language: {pickerSelection.language}
                </p>
            </aside>

            <Picker value={pickerSelection} onChange={setPickerSelection} wheelMode='normal'>
                <Picker.Column name={'language'}>
                    {
                        ["Swift", "C++", "JavaScript", "TypeScript"].map(
                            (language) => (
                                <Picker.Item key={language} value={language}>
                                    {language}
                                </Picker.Item>
                            )
                        )
                    }
                </Picker.Column>
            </Picker>

            <UIPicker
                collection={
                    ["Text", "File"]
                }
                defaultValue='Text'
                texttab={
                    () => (
                        <textarea className='w-full h-64'/>
                    )
                }
                filetab={
                    () => (
                        <input className='block mx-auto
                        '
                            type='file'
                        />
                    )
                }
            />

            <UIDisclosure
                children={
                    <>
                        <input className='w-full
                        '
                            type='text'
                        />
                    </>
                }
            />
        </>
    );
}
