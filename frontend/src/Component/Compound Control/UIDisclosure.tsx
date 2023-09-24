import * as Collapsible from '@radix-ui/react-collapsible';

import { UISwitch } from '../Control/UISwitch';

export default function UIDisclosure({ children }: { children?: React.ReactNode }) {
    return (
        <Collapsible.Root>
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
