/* Props
*/
type LanguageProps = {
    language: string
    isSelected: boolean
    onClick: () => void
}

/* Component
*/
export const Language: React.FC<LanguageProps> = (props) => {
    const {
        language,
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
