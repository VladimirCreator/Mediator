import { ComponentProps } from '../Prop/ComponentProp'

/* Props
*/
export type LanguageProps = {
    language: string
    img: string
    isSelected: boolean // Initially Modified: 11:30 AM Fri 06 Oct 2023
} & ComponentProps

/* Component
*/
export const Language: React.FC<LanguageProps> = (props) => {
    const {
        language,
        img,
        isSelected,
        ...rest
    } = props

    return (
        <div className={`relative aspect-video
            text-xl
            flex flex-1 h-28
            justify-center items-center
            rounded-md
            ${isSelected ? 'scale-95' : 'scale-75'}
            transition-all
            border ${isSelected ? 'border-blue-500' : 'border-gray-600'}
            ${isSelected ? 'text-white' : ''}
            ${isSelected ? 'bg-blue-500' : ''}
            ${isSelected ? 'font-semibold' : ''}
            `}
            {...rest}
        >
            <span className={`absolute inset-x-0 text-center transition-none`}>
                {language}
            </span>
        </div>
    )
}
