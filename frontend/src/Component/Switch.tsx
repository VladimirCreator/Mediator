import * as Accordion from '@radix-ui/react-accordion';
import * as Switch from '@radix-ui/react-switch';

const UISwitch: React.FC<{}> = (props) => {
    const {  } = props;

    return (
        <Switch.Root className='w-14 h-8 group box-content
            px-0.5
            rounded-full

            data-[state=unchecked]:bg-neutral-200
            data-[state=checked]:bg-green-500

            focus-visible:outline-0
            duration-150
        '
            children={
                <Switch.Thumb className='w-1/2 block aspect-square
                    bg-white rounded-full
                    shadow

                    group-data-[state=checked]:translate-x-full
                    duration-150
                '
                />
            }
        />
    );
};

export default UISwitch;
