import type {
    Flat
}
from '../../TypeScript/Flat';

import {
    Content
}
from '@radix-ui/react-tabs';

import type {
    TabsProps
}
from '@radix-ui/react-tabs';

type UISegmentedControlBuilder<Array extends ReadonlyArray<unknown>> = {
    [T in Array[number] as `${Lowercase<string & T>}`]: ($0: Lowercase<string & T>) => ReturnType<typeof Content>;
}

export type UISegmentedControlProp<Array extends ReadonlyArray<unknown>> = TabsProps & {
    tabs: Array;
    defaultValue: Lowercase<string & Flat<Array>>
} & UISegmentedControlBuilder<Array>;
