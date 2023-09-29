import { useState, useEffect } from 'react';

import { WebAppProvider, MainButton } from '@vkruglikov/react-telegram-web-app'

import { Main } from './Screen/Main';

import type { MediatorProps } from './Prop/MediatorProp';
import { Language } from '../TypeScript/Language';

export const Mediator: React.FC<MediatorProps> = () => {
    const [language, setLanguage] = useState<Language|string|null>(null);
    const [recipe, setRecipe] = useState<string|null>(null);
    const [stdin, setStdin] = useState<string|null>(null);

    const isReady: boolean = language !== null && recipe !== null

    const sendOverHTTP: () => void = () => {
        // @ts-expect-error
        const webApp = window.Telegram.WebApp

        webApp.sendData(
            {
                language,
                recipe,
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
                    <Main />
                    <MainButton
                        text='Send'
                        onClick={sendOverHTTP}
                    />
                </>
            }
        />
    );
}
