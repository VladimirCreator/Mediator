import { Root, Thumb as RadixThumb } from '@radix-ui/react-switch'

/* Props
*/
import type { SwitchProps, SwitchThumbProps as ThumbProps } from '@radix-ui/react-switch'

/* Component
*/
const Thumb: React.FC<ThumbProps> = (props) => {
    return (
        <RadixThumb {...props}
            asChild
        >
            <div className='aspect-square
                w-1/2

                bg-white

                rounded-full shadow

                group-data-[state=checked]:translate-x-full
                group-data-[state=open]:translate-x-full
                duration-150
                '
            />
        </RadixThumb>
    )
}

export const Switch: React.FC<SwitchProps> = (props) => {
    return (
        <Root {...props}
            className='group box-content
                w-14 h-8
                px-0.5
                rounded-full

                data-[state=unchecked]:bg-neutral-200
                data-[state=closed]:bg-neutral-200

                data-[state=checked]:bg-green-500
                data-[state=open]:bg-green-500

                focus-visible:outline-0 focus-visible:-translate-y-2
                duration-150
            '
        >
            <Thumb />
        </Root>
    )
}
