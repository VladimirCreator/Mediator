import { useState } from 'react';

import * as Tabs from "@radix-ui/react-tabs";
import Picker from 'react-mobile-picker';

export default function App() {
    const [selection, setSelection] = useState(
        {
            language: 'Swift'
        }
    );

    return (
        <>
            <Picker value={selection} onChange={setSelection}>
                <Picker.Column name={'A Programming Language'}>
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
        </>
    );
}
