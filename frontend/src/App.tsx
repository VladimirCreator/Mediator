import { Bot } from "./Component/Bot";
import { UISwitch } from "./Component/Control/UISwitch";
import { Picker } from "./Component/Compound Control/Picker";
import { Trigger, Content } from "@radix-ui/react-tabs";

export const App: React.FC = () => {
    if (!true) {
        return (
            <UISwitch name="stdin" value='recipe' />
        );
    }
    else if (true) {
        return (
            <Picker
                tags={
                    [
                        'text',
                        'file'
                    ]
                }
                defaultValue='text'
                textTrigger={
                    (tag: 'text') => <Trigger value={tag}>
                        {tag}
                    </Trigger>
                }
                textContent={
                    (tag: 'text') => <Content value={tag}>
                        <h1>
                            {tag}
                        </h1>
                    </Content>
                }
                fileTrigger={
                    (tag: 'file') => <Trigger value={tag}>
                        {tag}
                    </Trigger>
                }
                fileContent={
                    (tag: 'file') => <Content value={tag}>
                        <h1>
                            FSALKj
                        </h1>
                    </Content>
                }
            />
        );
    }
    return (
       <Bot />
    );
}
