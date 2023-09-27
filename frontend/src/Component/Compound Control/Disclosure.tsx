import * as Collapsible from '@radix-ui/react-collapsible';

import { UISwitch } from '../Control/UISwitch';

import type { DisclosureProp } from '../Prop/DisclosureProp';

const Disclosure: React.FC<DisclosureProp> = (props) => {
    const { children } = props;

    return (
        <Collapsible.Root {...props}>
            <div className='flex
                justify-between
            '>
                <label className='font-mono'>
                    stdin
                </label>
                <Collapsible.Trigger
                    asChild children={
                        <UISwitch />
                    }
                />
            </div>

            <Collapsible.Content
                children={children}
            />
        </Collapsible.Root>
    );
}

export { Disclosure }
