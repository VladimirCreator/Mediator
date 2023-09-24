import { Fragment } from 'react';
import { Root, List } from '@radix-ui/react-tabs';
import type { PickerProp } from '../Prop/PickerProp';

export const Picker: <const Array extends readonly unknown[]>(prop: PickerProp<Array>) => ReturnType<typeof Root> = (prop) => {
    const { tags } = prop;

    return (
        <Root
            className='space-y-2'
        >
            <List children={
                    tags.map(
                        (tag) => {
                            const component = prop[`${tag}Trigger`];

                            if (typeof component !== 'undefined') {
                                return <Fragment
                                    key={tag}
                                    children={component(tag)}
                                />
                            }
                            else {
                                return null;
                            }
                        }
                    )
                }
            />

            {
                tags.map(
                    (tag) => {
                        const component = prop[`${tag}Content`];

                        if (typeof component !== 'undefined') {
                            return <Fragment
                                key={tag}
                                children={component(tag)}
                            />
                        }
                        else {
                            return null
                        }
                    }
                )
            }
        </Root>
    );
};
