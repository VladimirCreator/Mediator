import * as Tabs from '@radix-ui/react-tabs';

import type { UISegmentedControl } from './Prop/UIPickerProp';

export default function UISegmentedControl<N extends string, const T extends readonly string[]>({ collection: container, ...props }: UISegmentedControl<N, T>) {
    return (
        <Tabs.Root className='
            space-y-2
        '
            children={
                <>
                    <Tabs.List className='flex
                            text-blue-500
                            border-solid border border-blue-500
                            divide-solid divide-x divide-blue-500
                            rounded-md
                        '
                        children={
                            container.map(
                                (tab) => (
                                    <Tabs.Trigger className='flex-1
                                            py-1

                                            data-[state=active]:text-white
                                            data-[state=active]:bg-blue-500
                                        '
                                        key={tab}
                                        value={tab}
                                        children={tab}
                                    />
                                )
                            )
                        }
                    />
                    {
                        container.map(
                            (tab) => (
                                <Tabs.Content
                                    key={tab}
                                    value={tab}
                                    children={
                                        // @ts-expect-error
                                        props[`${tab.toLowerCase()}tab`]?.call()
                                    }
                                />
                            )
                        )
                    }
                </>
            }
            {...props}
        />
    );
};
