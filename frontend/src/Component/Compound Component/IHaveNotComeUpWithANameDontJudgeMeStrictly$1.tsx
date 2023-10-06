import { Trigger, Content } from '@radix-ui/react-tabs'
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
                            className='w-full h-64 bg-slate-200 font-mono p-2 rounded'
                            onChange={(event) => onChangeRecipe(event.target.value)}
                            placeholder='Your recipe'
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
    )
}

export type { BetaProps }
