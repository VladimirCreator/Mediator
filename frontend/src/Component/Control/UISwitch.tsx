import {
    Root,
    Thumb,
    type SwitchProps as SwitchProp
} from '@radix-ui/react-switch';

const UIThumb: React.FC = () => {
    return (
        <Thumb className='w-1/2 aspect-square
                    bg-white rounded-full
                    shadow

                    group-data-[state=checked]:translate-x-full group-data-[state=open]:translate-x-full
                    duration-150
                '
            asChild children={
                <div />
            }
        />
    );
};

export const UISwitch: React.FC<SwitchProp> = (props) => {
    return (
        <Root {...props}
            className='w-14 h-8 group box-content
            px-0.5
            rounded-full

            data-[state=unchecked]:bg-neutral-200 data-[state=closed]:bg-neutral-200
            data-[state=checked]:bg-green-500 data-[state=open]:bg-green-500

            focus-visible:outline-0
            duration-150
        '
            children={
                <UIThumb />
            }
        />
    );
};
