import type { Flat } from '../../TypeScript/Helper/Flat';

import { List, Trigger, Content } from '@radix-ui/react-tabs';
import type { TabsProps as TabProp, TabsListProps as TabListProp } from '@radix-ui/react-tabs';

type ListBuilder<Array extends ReadonlyArray<unknown>> = {
    list: (prop: TabListProp) => ReturnType<typeof List>;
} & {
    [T in Array[number] as `${T&string}Trigger`]: (tag: T) => ReturnType<typeof Trigger>
};

type ContentBuilder<Array extends ReadonlyArray<unknown>> = {
    [T in Array[number] as `${T&string}Content`]: (tag: T) => ReturnType<typeof Content>
};

type PickerProp<Array extends ReadonlyArray<unknown>> = TabProp & ListBuilder<Array> & ContentBuilder<Array> & {
    tags: Array;
    defaultValue: Flat<Array>;
};

export type { PickerProp };
