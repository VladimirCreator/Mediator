import React, { forwardRef } from 'react'
import { List } from '@radix-ui/react-tabs';

import type { ComponentProps } from '../Prop/ComponentProp' // Initially Modified: 03:33 PM Sat 07 Oct 2023

/* Props
*/
type SegmentedControlProps = ComponentProps

export const Button: React.FC<{ label: string }> = forwardRef(
    (props, ref) => {
        const { label } = props

        return (
            // @ts-expect-error
            <button ref={ref} className='flex-1
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
)

/* Component
*/
export const SegmentedControl: React.FC<SegmentedControlProps> = (props) => {
    const {
        component: Component = 'div',
        ...rest
    } = props

    return (
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
