import { Fragment } from 'react';
import { Root } from '@radix-ui/react-tabs';
import type { PickerProp } from '../Prop/PickerProp';

export const Picker: <const Array extends readonly string[]>(prop: PickerProp<Array>) => ReturnType<typeof Root> = (prop) => {
    const { list, tags, onValueChange } = prop;

    return (
        <Root onValueChange={onValueChange}
            className='space-y-2'
        >

            {
                list({children:
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
                    )}
                )
            }

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
