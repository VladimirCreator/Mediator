import { Trigger, Content } from '@radix-ui/react-tabs'
import { Card } from '../Layout/Card';
import { Picker } from '../Compound Control/Picker'
import { SegmentedControl, Button } from '../Control/SegmentedControl'

// Perfectoinism kills me.
export const IHaveNotComeUpWithANameDontJudgeMeStrictly$1: React.FC = () => {
    return (
        <Card>
            <Picker
                tags={
                    ['text', 'file']
                }
                defaultValue='text'
                list={
                    (props) => (
                        <SegmentedControl {...props} />
                    )
                }
                textTrigger={
                    (label: 'text') => <Trigger value={label} asChild
                        children={
                            <Button label={label} />
                        }
                    />
                }
                fileTrigger={
                    (label: 'file') => <Trigger value={label} asChild
                        children={
                            <Button label={label} />
                        }
                    />
                }
                textContent={
                    ($0: 'text') => (
                        <Content value={$0}>
                            <textarea
                                className='w-full h-64 bg-slate-200'
                                onChange={(event) => {}}
                                placeholder={'Your Recipe'}
                            />
                        </Content>
                    )
                }
                fileContent={
                    ($0: 'file') => (
                        <Content value={$0}>
                            <input className='block mx-auto'
                                type='file'
                                onChange={(event) => event.target.files?.item(0)?.text().then(text => {})}
                            />
                        </Content>
                    )
                }
            />
        </Card>
    );
}
