import { Card } from "../Layout/Card";

// Perfectoinism kills me.
export const IHaveNotComeUpWithANameDontJudgeMeStrictly$0: React.FC = () => {
    return (
        <Card className='hidden'>
            <aside>
                <p>Language: {pickerSelection.language}</p>
                <p>Target: {true ? target : ''}</p>
                <p>stdin: {stdin}</p>

                <button className='text-red-500' type='button'>
                    Send to bot
                </button>
            </aside>
        </Card>
    );
}
