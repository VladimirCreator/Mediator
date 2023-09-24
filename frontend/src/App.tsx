import { useState } from 'react';

import * as Tabs from "@radix-ui/react-tabs";

import Picker from 'react-mobile-picker';

import UISwitch from './Component/UISwitch';
import UIPicker from './Component/UIPicker';

export default function App() {
    const [languageSelection, setLanguageSelection] = useState(
        {
            language: 'Swift'
        }
    );

    if (!true) {
        return (
            <UISwitch />
        );
    }
    else if (true) {
        return (
            <UIPicker
                collection={
                    ["Text", "File"]
                }
                defaultValue='Text'
                texttab={
                    () => (
                        <h2>asd</h2>
                    )
                }
                filetab={
                    () => (
                        <h1>vxc</h1>
                    )
                }
            />
        );
    }

    return (
        <>
            <Picker value={languageSelection} onChange={setLanguageSelection}>
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

            <Tabs.Root>
                <Tabs.List>
                    <Tabs.Trigger value={'plain'} children={ "Plain" } />
                    <Tabs.Trigger value={'file'} children={ "File" } />
                </Tabs.List>

                <Tabs.Content value='plain'>
                    <h1>
                        Иди нахуй
                    </h1>
                </Tabs.Content>

                <Tabs.Content value='file'>
                    <h1>
                        File
                    </h1>
                </Tabs.Content>
            </Tabs.Root>
        </>
    );
}
