import { Trigger, Content } from '@radix-ui/react-tabs'
import { Card } from '../Layout/Card';
import { Picker } from '../Compound Control/Picker'
import { SegmentedControl, Button } from '../Control/SegmentedControl'

type BetaProps = {
    onChangeRecipe: (recipe: string) => void
}

// Perfectoinism kills me.
export const IHaveNotComeUpWithANameDontJudgeMeStrictly$1: React.FC<BetaProps> = (props) => {
    const {
        onChangeRecipe
    } = props

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
                        <Content value={$0} asChild>
                            <textarea
                                className='w-full h-64 bg-slate-200'
                                onChange={(event) => onChangeRecipe(event.target.value)}
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
                                onChange={(event) => event.target.files?.item(0)?.text().then(onChangeRecipe)}
                            />
                        </Content>
                    )
                }
            />
        </Card>
    );
}

export type { BetaProps }
