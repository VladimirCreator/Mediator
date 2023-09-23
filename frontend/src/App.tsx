import { useState } from 'react';

import * as Tabs from "@radix-ui/react-tabs";
import * as Accordion from "@radix-ui/react-accordion";
import * as Switch from "@radix-ui/react-switch";

import Picker from 'react-mobile-picker';

import UISwitch from './Component/UISwitch';

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
            <UISwitch />
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

            <Accordion.Root type='single' collapsible>
                <Accordion.Item value='stdin'>
                    <Accordion.Header>
                        Description

                        <Accordion.Trigger asChild>
                            <Switch.Root>
                                <Switch.Thumb className='block w-5 aspect-square bg-red-400' />
                            </Switch.Root>
                        </Accordion.Trigger>
                    </Accordion.Header>

                    <Accordion.Content>
                        <h1>
                            asdfij
                        </h1>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>
        </>
    );
}
