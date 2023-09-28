import { useState } from 'react';

import { Main } from './Screen/Main';

import type { MediatorProps } from './Prop/MediatorProp';
import type { Language } from '../TypeScript/Language';

export const Mediator: React.FC<MediatorProps> = () => {
    const [language, setLanguage] = useState<Language|null>(null);
    const [recipe, setRecipe] = useState<string|null>(null);
    const [stdin, setStdin] = useState<string|null>(null);

    return (
        <Main />
    );
}
