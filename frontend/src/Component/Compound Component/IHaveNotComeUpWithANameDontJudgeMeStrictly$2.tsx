import { Card } from "../Layout/Card";

// Perfectoinism kills me.
export const IHaveNotComeUpWithANameDontJudgeMeStrictly$2: React.FC = () => {
    return (
        <Card>
            <UIDisclosure
                children={
                    <>
                        <input className='w-full bg-slate-200
                        '
                            type='text'
                            onChange={(event) => setStdin(event.target.value)}
                        />
                    </>
                }
            />
        </Card>
    );
}
