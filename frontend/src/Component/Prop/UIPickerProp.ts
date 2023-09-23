import {
    TabsProps
} from "@radix-ui/react-tabs";

type UIPickerBuilder<T extends readonly string[]> = {
    [K in T[number] as `${Lowercase<string & K>}`]: () => JSX.Element;
}

type UIPickerProp<
    Element,
    Collection extends ReadonlyArray<Element>
> = {
    collection: Collection;
    defaultValue: Collection[number];
} & UIPickerBuilder<Collection> & Omit<TabsProps, 'defaultValue'>;

export default UIPickerProp;
