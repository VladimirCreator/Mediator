import * as Tabs from '@radix-ui/react-tabs';

import type UIPickerProp from './Prop/UIPickerProp';

const UIPicker: React.FC<UIPickerProp> = (props) => {
    const {  } = props;

    return (
        <Tabs.Root className='flex text-blue-500
            border-solid border border-blue-500
            divide-solid divide-x divide-blue-500
            rounded-md
        '
            defaultValue={undefined}
            asChild children={
                <Tabs.List
                    children={
                        ["plain", "file"].map(
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
            }
        />
    );
};

export default UIPicker;
