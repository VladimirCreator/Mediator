import React, { forwardRef } from 'react'
import { List } from '@radix-ui/react-tabs';

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

export const SegmentedControl: React.FC = (props) => {
    const {
        type,
        children,
        ...rest
    } = props

    return React.createElement(
        type ?? List,
        Object.assign(
            rest,
            {
                className: 'flex group\
                    text-blue-500\
                    border border-solid border-blue-500\
                    divide-x divide-solid divide-blue-500\
                    \
                    rounded-md\
                '
            }
        ),
        children
    )
}
