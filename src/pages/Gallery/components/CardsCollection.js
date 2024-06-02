import Card from "./Card";

const CardsCollection = (props) => {
    return (
        <div className="d-flex justify-content-between align-items-center row">
            {
                props.data.map(item => (
                    <Card name={item.name} image={item.image} text={item.text}/>
                ))
            }
        </div>
    )
}

export default CardsCollection;