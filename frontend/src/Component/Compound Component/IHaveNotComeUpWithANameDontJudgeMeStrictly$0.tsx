import { Card } from "../Layout/Card";
import Picker from "react-mobile-picker";

// Perfectoinism kills me.
export const IHaveNotComeUpWithANameDontJudgeMeStrictly$0: React.FC = () => {
    return (
        <Card>
            <Picker value={{l: ''}} onChange={() => {}} wheelMode='normal'>
                <Picker.Column name={'language'}>
                    {
                        ['Swift', 'C++', 'JavaScript', 'TypeScript'].map(
                            (language) => (
                                <Picker.Item key={language} value={language}>
                                    {language}
                                </Picker.Item>
                            )
                        )
                    }
                </Picker.Column>
            </Picker>
        </Card>
    );
}
