import type { Flat } from '../../TypeScript/Flat';

import {
    Content,
    type TabsProps
} from '@radix-ui/react-tabs';

type UISegmentedControlBuilder<Array extends ReadonlyArray<unknown>> = {
    [T in Array[number] as `${Lowercase<string & T>}`]: ($0: T) => ReturnType<typeof Content>;
}

type UISegmentedControlProp<Array extends ReadonlyArray<unknown>> = TabsProps & {
    tabs: Array;
    defaultValue: Flat<Array>
} & UISegmentedControlBuilder<Array>;

export type {
    UISegmentedControlProp,
};
