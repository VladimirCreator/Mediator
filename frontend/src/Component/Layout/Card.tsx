import React from 'react'
import type { CardProps } from '../Prop/CardProp'

export const Card: <
    IntrinsicElement extends keyof React.JSX.IntrinsicElements
>(props: CardProps<IntrinsicElement>) => React.ReactNode = (props) => {
    const {
        component: type = 'div',
        children,
        ...rest
    } = props

    return React.createElement(
        type,
        Object.assign(
            rest,
            { className: 'p-4 bg-white rounded-xl' }
        ),
        children
    );
}
