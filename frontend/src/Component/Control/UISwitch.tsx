import {
    Root,
    Thumb
}
from '@radix-ui/react-switch';

import type {
    SwitchProps as SwitchProp,
    SwitchThumbProps as ThumbProp
}
from '@radix-ui/react-switch';

const UIThumb: React.FC<ThumbProp> = (prop) => {
    return (
        <Thumb {...prop}
            asChild
            children={
                <div className='aspect-square
                        w-1/2

                        bg-white

                        rounded-full shadow

                        group-data-[state=checked]:translate-x-full
                        group-data-[state=open]:translate-x-full
                        duration-150
                    '
                />
            }
        />
    );
};

export const UISwitch: React.FC<SwitchProp> = (prop) => {
    return (
        <Root {...prop}
            className='group box-content
                w-14 h-8
                px-0.5
                rounded-full

                data-[state=unchecked]:bg-neutral-200
                data-[state=closed]:bg-neutral-200

                data-[state=checked]:bg-green-500
                data-[state=open]:bg-green-500

                focus-visible:outline-0 focus-visible:-translate-y-2
                duration-150
            '
            children={
                <UIThumb />
            }
        />
    );
};
