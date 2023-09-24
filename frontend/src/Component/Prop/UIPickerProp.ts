import type {
    TabsProps
} from '@radix-ui/react-tabs';

type UIPickerBuilder<T extends readonly string[]> = {
    [K in T[number] as `${Lowercase<string & K>}tab`]: () => JSX.Element;
}

type UISegmentedControl<
    // @ts-expect-error
    Element,
    Collection extends ReadonlyArray<string>
> = TabsProps & {
    collection: Collection;
    defaultValue: Collection[number];
} & UIPickerBuilder<Collection>;

export type {
    UISegmentedControl
};
