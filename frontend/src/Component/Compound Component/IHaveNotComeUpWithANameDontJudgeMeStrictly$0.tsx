import { Root, Trigger } from '@radix-ui/react-tabs'
import Picker from 'react-mobile-picker'

import { Card } from '../Layout/Card'
import { SegmentedControl, Button } from '../Control/SegmentedControl'

/* Variant 1
*/
const Variant1: React.FC = () => {
    return (
        <Card component='section'>
            <Picker value={{l: ''}} onChange={() => {}} wheelMode='normal'>
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
    )
}

// Perfectoinism kills me.
export const IHaveNotComeUpWithANameDontJudgeMeStrictly$0: React.FC = () => {
    return (
        <Card component='section'>
            <Root children={
                    <SegmentedControl>
                        {
                            ['Swift', 'C++'].map(
                                (language) => (
                                    <Trigger key={language}
                                        value={language}
                                        asChild
                                    >
                                        <Button label={language} />
                                    </Trigger>
                                )
                            )
                        }
                    </SegmentedControl>
                }
            />
        </Card>
    )
}
