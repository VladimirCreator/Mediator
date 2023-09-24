import type { CardProp } from "../Prop/CardProp";

const Card: React.FC<CardProp> = (props) => {
    const { children } = props;

    return (
        <section className='bg-white
                rounded-xl
            '
            children={children}
            {...props}
        />
    );
};

export default Card;
