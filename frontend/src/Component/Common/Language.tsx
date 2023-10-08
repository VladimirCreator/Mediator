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
        <div className={`relative aspect-[3/2]
            text-xl
            flex flex-1 h-28
            justify-center items-center
            rounded-md
            ${isSelected ? 'scale-95' : 'scale-75'}
            transition-all
            border ${isSelected ? 'border-blue-500 dark:border-blue-600' : 'border-gray-600 dark:border-gray-500'}
            ${isSelected ? 'text-white' : ''}
            ${isSelected ? 'bg-blue-500 dark:bg-blue-600' : ''}
            ${isSelected ? 'font-semibold' : ''}
            `}
            {...rest}
        >
            <span className='absolute
                    text-center dark:text-white

                    inset-x-0
                '
            >
                {language}
            </span>
        </div>
    )
}
