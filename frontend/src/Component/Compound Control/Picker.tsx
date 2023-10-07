import { Fragment } from 'react'
import {
    Root,
    List,
    Trigger,
    Content
} from '@radix-ui/react-tabs'


/* Props
*/
import type {
    TabsProps,
    TabsListProps
} from '@radix-ui/react-tabs'
import type { Flat } from '../../TypeScript/Helper/Flat'

type ListBuilder<Array extends ReadonlyArray<unknown>> = {
    list: (prop: TabsListProps) => ReturnType<typeof List>
} & {
    [T in Array[number] as `${T&string}Trigger`]: (tag: T) => ReturnType<typeof Trigger>
}

type ContentBuilder<Array extends ReadonlyArray<unknown>> = {
    [T in Array[number] as `${T&string}Content`]: (tag: T) => ReturnType<typeof Content>
}

type PickerProp<Array extends ReadonlyArray<unknown>> = TabsProps & ListBuilder<Array> & ContentBuilder<Array> & {
    tags: Array
    defaultValue: Flat<Array>
}

/* Component
*/
export const Picker: <const Array extends readonly string[]>(prop: PickerProp<Array>) => ReturnType<typeof Root> = (prop) => {
    const {
        list,
        tags,
        onValueChange
    } = prop

    return (
        <Root onValueChange={onValueChange}
            className='space-y-2'
        >

            {
                list({children:
                    tags.map(
                        (tag) => {
                            const component = prop[`${tag}Trigger`]

                            if (typeof component === 'undefined') {
                                return null
                            }
                            return (
                                <Fragment
                                    key={tag}
                                    children={component(tag)}
                                />
                            )
                        }
                    )}
                )
            }

            {
                tags.map(
                    (tag) => {
                        const component = prop[`${tag}Content`]

                        if (typeof component === 'undefined') {
                            return null
                        }
                        return (
                            <Fragment
                                key={tag}
                                children={component(tag)}
                            />
                        )
                    }
                )
            }
        </Root>
    )
}
