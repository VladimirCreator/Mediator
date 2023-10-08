/* Props
*/
import type { ComponentProps } from "../Prop/ComponentProps"

type ScrollViewProps = ComponentProps

/* Component
*/
export const ScrollView: React.FC<ScrollViewProps> = (props) => {
    const {
        component: Component = 'div',
        children,
        ...rest
    } = props

    return (
        // @ts-expect-error
        <Component {...rest}
            className='overflow-hidden
                overflow-x-scroll
            '
        >
            <div className='flex flex-nowrap
                space-x-2
                w-max
            '
            >
                {children}
            </div>
        </Component>
    )
}
