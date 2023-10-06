import { useState, useEffect } from 'react';

import { WebAppProvider, MainButton } from '@vkruglikov/react-telegram-web-app'

import { Main } from './Screen/Main';

import type { MediatorProps } from './Prop/MediatorProp';

export const Mediator: React.FC<MediatorProps> = () => {
    const [language, setLanguage] = useState<string|null>(null);
    const [recipe, setRecipe] = useState<string|null>(null);
    const [theArguments, setArguments] = useState<string|null>(null);
    const [stdin, setStdin] = useState<string|null>(null);

    const didSelectLanguage: boolean = language !== null
    const didProvideRecipe: boolean = recipe !== null

    // Может HTTP, а может не HTTP.
    const sendOverHTTP: () => void = () => {
        // @ts-expect-error
        const webApp = window.Telegram.WebApp

        webApp.sendData(
            {
                language,
                recipe,
                arguments: theArguments,
                stdin
            }
        );
    }

    useEffect(
        () => {
            // @ts-expect-error
            const mainButton = window.Telegram.WebApp.MainButton

            if (language === null || recipe === null) {
                mainButton.hide()
                return
            }
            mainButton.show()
        },
        [language, recipe]
    );

    return (
        <WebAppProvider children={
                <>
                    <Main
                        onSelectLanguage={setLanguage}
                        onChangeRecipe={setRecipe}
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
    );
}
