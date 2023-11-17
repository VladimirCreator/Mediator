import React from 'react'

/* Props
*/
import type { ComponentProps } from '../Prop/ComponentProps'

type CardProps = ComponentProps

/* Component
*/
export const Card: React.FC<CardProps> = (props) => {
	const { component: Component = 'div', ...rest } = props

	return (
		// @ts-expect-error
		<Component {...rest} className='p-4 bg-white dark:bg-black
				rounded-xl
			'
		/>
	)
}
