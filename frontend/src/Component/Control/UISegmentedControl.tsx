import { List } from '@radix-ui/react-tabs';
import type { UISegmentedControlProp } from '../Prop/UISegmentedControlProp';

export const UISegmentedControl: React.FC<UISegmentedControlProp> = (props) => {
    return (
        <List className='flex group
            text-blue-500
            border border-solid border-blue-500
            divide-x divide-solid divide-blue-500

            rounded-md
            '
            {...props}
        />
    );
};
