import {
    TabsProps
} from "@radix-ui/react-tabs";

type UIPickerProp<
    Element,
    Collection extends ReadonlyArray<Element>
> = {
    collection: Collection
    defaultValue: Collection[number]

} & Omit<TabsProps, 'defaultValue'>;

export default UIPickerProp;
