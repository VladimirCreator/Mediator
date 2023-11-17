import { Root, Thumb as RadixThumb } from '@radix-ui/react-switch'

/* Props
*/
import type { SwitchProps, SwitchThumbProps as ThumbProps } from '@radix-ui/react-switch'

/* Component
*/
const Thumb: React.FC<ThumbProps> = (props) => {
	return (
		<RadixThumb {...props} asChild>
			<div className='w-1/2 aspect-square
				bg-white
				rounded-full shadow

				group-data-[state=checked]:translate-x-full group-data-[state=open]:translate-x-full
				duration-150
			'
			/>
		</RadixThumb>
	)
}

export const Switch: React.FC<SwitchProps> = (props) => {
	return (
		<Root {...props} className='group w-14 h-8 box-content
			px-0.5
			rounded-full

			data-[state=unchecked]:bg-neutral-200 dark:data-[state=unchecked]:bg-neutral-600
			data-[state=closed]:bg-neutral-200 dark:data-[state=closed]:bg-neutral-600

			data-[state=checked]:bg-green-500 dark:data-[state=checked]:bg-green-600
			data-[state=open]:bg-green-500 dark:data-[state=open]:bg-green-600

			focus-visible:outline-0 focus-visible:-translate-y-2
			duration-150
		'
		>
			<Thumb />
		</Root>
	)
}
