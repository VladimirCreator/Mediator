import React, { forwardRef } from 'react'

/* Props
*/
import type { TabsListProps } from '@radix-ui/react-tabs'
import type { ComponentProps } from '../Prop/ComponentProps'

type ButtonProps = {
    label: string
}
type SegmentedControlProps = ComponentProps & TabsListProps

export const Button: React.FC<ButtonProps> = (props) => {
    const { label } = props

    return (
        <button className='flex-1
                    data-[state=active]:text-white
                    data-[state=active]:bg-blue-500
                '
            type='button'
            children={
                label.replace(/^./, label.charAt(0).toUpperCase())
            }
            {...props}
        />
    )
}

/* Component
*/
export const SegmentedControl: React.FC<SegmentedControlProps> = (props) => {
    const {
        component: Component = 'div',
        ...rest
    } = props

    return (
        // @ts-expect-error
        <Component {...rest}
            className='flex group\
                text-blue-500\
                border border-solid border-blue-500\
                divide-x divide-solid divide-blue-500\
                \
                rounded-md\
            '
        />
    )
}
