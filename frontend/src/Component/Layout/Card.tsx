const Card: React.FC = (props) => {
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
