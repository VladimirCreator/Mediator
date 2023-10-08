import { useState, useEffect } from 'react'

import { WebAppProvider, MainButton } from '@vkruglikov/react-telegram-web-app'
import { Main } from './Screen/Main'

/* # Props
*/
type MediatorProps = unknown

/* # Component
*/
export const Mediator: React.FC<MediatorProps> = () => {
    const [language, setLanguage]      = useState<string|null>(null)
    const [text, setText]          = useState<string|null>(null)
    const [theArguments, setArguments] = useState<string|null>(null)
    const [stdin, setStdin]            = useState<string|null>(null)

    const didSelectLanguage: boolean = language !== null
    const didProvideRecipe: boolean = text !== null

    // Может HTTP, а может не HTTP.
    const sendOverHTTP: () => void = () => {
        // @ts-expect-error
        const webApp = window.Telegram.WebApp

        const recipe = {
            language,
            text: text?.replace(/^\s+/gm, ''),
            arguments: theArguments,
            stdin
        }
        const data = { data: recipe }

        webApp.sendData(
            JSON.stringify(data)
        )
    }

    useEffect(
        () => {
            // @ts-expect-error
            const mainButton = window.Telegram.WebApp.MainButton

            if (language === null || text === null) {
                mainButton.hide()
                return
            }
            mainButton.show()
        },
        [language, text]
    )

    return (
        <WebAppProvider children={
                <>
                    <Main
                        onSelectLanguage={setLanguage}
                        onChangeRecipe={setText}
                        onChangeArguments={setArguments}
                        onChangeStdin={setStdin}
                    />
                    <MainButton
                        text='Execute'
                        onClick={sendOverHTTP}
                        disabled={!didSelectLanguage && !didProvideRecipe}
                    />
                </>
            }
        />
    )
}
