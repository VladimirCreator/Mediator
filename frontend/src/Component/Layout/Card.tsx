import React, { forwardRef } from 'react'
import type { CardProps } from '../Prop/CardProp'

export const Card: React.FC<CardProps> = (props) => {
    const { component: Component = 'div', ...rest } = props

    return (
        <Component {...rest}
            className='p-4 bg-white rounded-xl'
        />
    )
}
