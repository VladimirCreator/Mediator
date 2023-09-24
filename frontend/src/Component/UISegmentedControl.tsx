import * as Tabs from '@radix-ui/react-tabs';

import type {
    UISegmentedControlProp
} from './Prop/UISegmentedControlProp';

const UISegmentedControl: <const Array extends ReadonlyArray<string>>(props: UISegmentedControlProp<Array>) => ReturnType<typeof Tabs.Root> = (props) => {
    const { tabs } = props;

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
                            tabs.map(
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
                        tabs.map(
                            (tab) => {
                                const key = tab.toLowerCase();

                                if (key in props) {
                                    return props[key as keyof typeof props]?.call(tab)
                                }
                                else {
                                    return null;
                                }
                            }
                        )
                    }
                </>
            }
            {...props}
        />
    );
};

export {
    UISegmentedControl
};
