import type { CardProp } from "../Prop/CardProp";

const Card: React.FC<CardProp> = (props) => {
    const className: string = [
        props.className,
        'p-4',
        'bg-white',
        'rounded-xl'
    ].join(' ');

    return (
        <section
            {...props}
            className={className}
        />
    );
};

export default Card;
