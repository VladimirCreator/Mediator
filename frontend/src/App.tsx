import { Bot } from "./Component/Bot";
import { UISwitch } from "./Component/Control/UISwitch";
import { Picker } from "./Component/Compound Control/Picker";

export const App: React.FC = () => {
    if (!true) {
        return (
            <UISwitch name="stdin" value='recipe' />
        );
    }
    else if (true) {
        return (
            <Picker from={['File, Text']}

            />
        );
    }
    return (
       <Bot />
    );
}
