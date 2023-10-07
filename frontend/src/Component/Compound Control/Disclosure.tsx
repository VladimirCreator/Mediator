import { Root, Trigger, Content } from '@radix-ui/react-collapsible';
import { UISwitch } from '../Control/UISwitch';

import type { CollapsibleProps } from '@radix-ui/react-collapsible';

/* Props
*/
type DisclosureProps = {
    label: string
} & CollapsibleProps

/* Component
*/
export const Disclosure: React.FC<DisclosureProps> = (props) => {
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
