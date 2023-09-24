import {
    TabsProps
} from "@radix-ui/react-tabs";

type UIPickerBuilder<T extends readonly string[]> = {
    [K in T[number] as `${Lowercase<string & K>}tab`]: () => JSX.Element;
}

type UIPickerProp<
    Element,
    Collection extends ReadonlyArray<string>
> = {
    collection: Collection;
    defaultValue: Collection[number];
} & UIPickerBuilder<Collection> & Omit<TabsProps, 'defaultValue'>;

export default UIPickerProp;
