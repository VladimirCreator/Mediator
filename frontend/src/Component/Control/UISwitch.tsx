import * as Switch from '@radix-ui/react-switch';

import type UISwitchProp from '../Prop/UISwitchProp';

const UISwitch: React.FC<UISwitchProp> = (props) => {
    return (
        <Switch.Root className='w-14 h-8 group box-content
            px-0.5
            rounded-full

            data-[state=unchecked]:bg-neutral-200 data-[state=closed]:bg-neutral-200
            data-[state=checked]:bg-green-500 data-[state=open]:bg-green-500

            focus-visible:outline-0
            duration-150
        '
            children={
                <Switch.Thumb className='w-1/2 aspect-square
                    bg-white rounded-full
                    shadow

                    group-data-[state=checked]:translate-x-full group-data-[state=open]:translate-x-full
                    duration-150
                '
                asChild children={
                    <div />
                }
                />
            }
            {...props}
        />
    );
};

export default UISwitch;
