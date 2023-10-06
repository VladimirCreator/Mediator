import { Root, Trigger, Content } from '@radix-ui/react-collapsible';

import { UISwitch } from '../Control/UISwitch';

import type { DisclosureProp } from '../Prop/DisclosureProp';

export const Disclosure: React.FC<DisclosureProp> = (props) => {
    const { children, label } = props;

    return (
        <Root {...props}>
            <div className='flex
                justify-between
            '>
                <label className='font-mono'>
                    {label}
                </label>
                <Trigger
                    asChild children={
                        <UISwitch />
                    }
                />
            </div>

            <Content
                children={children}
            />
        </Root>
    )
}
