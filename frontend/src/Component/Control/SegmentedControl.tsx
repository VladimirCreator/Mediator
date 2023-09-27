import React from 'react'
import { List } from '@radix-ui/react-tabs';
import type { SegmentedControlProps } from '../Prop/SegmentedControlProp';

export const SegmentedControl: <
    IntrinsicElement extends keyof React.JSX.IntrinsicElements
>(props: SegmentedControlProps<IntrinsicElement>) => React.ReactNode = (props) => {
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
