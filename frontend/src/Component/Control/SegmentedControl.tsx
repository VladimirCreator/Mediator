import React, { forwardRef } from 'react'
import { List } from '@radix-ui/react-tabs'

/* Props
*/
import type { TabsListProps } from '@radix-ui/react-tabs'
import type { ComponentProps } from '../Prop/ComponentProps'

type ButtonProps = {
    label: string
}
type SegmentedControlProps = ComponentProps & TabsListProps

export const Button: React.FC<ButtonProps> = forwardRef(
    (props, ref) => {
        const { label } = props

        return (
            <button className='flex-1
                    py-1.5
                    data-[state=active]:text-white
                    data-[state=active]:bg-blue-500 dark:data-[state=active]:bg-blue-600
                '
                type='button'
                // @ts-expect-error
                ref={ref}
                children={
                    label.replace(/^./, label.charAt(0).toUpperCase())
                }
                {...props}
            />
        )
    }
)

/* Component
*/
export const SegmentedControl: React.FC<SegmentedControlProps> = (props) => {
    const {
        component: Component = 'div',
        ...rest
    } = props

    return (
        // @ts-expect-error
        <List {...rest}
            className='group flex overflow-hidden
                text-blue-500 dark:text-blue-600

                border border-solid border-blue-500 dark:border-blue-600
                divide-x divide-solid divide-blue-500 dark:divide-blue-600
                rounded-lg
            '
        />
    )
}
