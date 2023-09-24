import { Bot } from "./Component/Bot";
import { UISwitch } from "./Component/Control/UISwitch";

export const App: React.FC = () => {
    if (true) {
        return (
            <>
                <UISwitch name="stdin" />
                <button>sumbit</button>
            </>
        );
    }
    return (
       <Bot />
    );
}
