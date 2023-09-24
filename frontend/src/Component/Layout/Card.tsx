const Card: React.FC = (props) => {
    // @ts-expect-error
    const { children } = props;

    return (
        <section className='bg-white
                rounded-xl
            '
            children={children}
        />
    );
};

export default Card;
