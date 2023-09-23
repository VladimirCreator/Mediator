import * as Tabs from '@radix-ui/react-tabs';

import type UIPickerProp from './Prop/UIPickerProp';


export default function UIPicker<N extends string, const T extends readonly N[]>({ collection: container, ...props }: UIPickerProp<N, T>) {

    return (
        <Tabs.Root className='flex text-blue-500
            border-solid border border-blue-500
            divide-solid divide-x divide-blue-500
            rounded-md
        '
            asChild children={
                <Tabs.List
                    children={
                        container.map(
                            (tab) => (
                                <Tabs.Trigger className='flex-1
                                    py-1

                                    data-[state=active]:text-white
                                    data-[state=active]:bg-blue-500
                                '
                                    key={tab}
                                    value={tab?.toString()}
                                    children={tab}
                                />
                            )
                        )
                    }
                />
            }
            {...props}
        />
    );
};
