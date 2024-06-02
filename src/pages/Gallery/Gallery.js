import work1 from "../../images/work1.jpg";
import work2 from "../../images/work2.jpg";
import work3 from "../../images/work3.jpg";
import work4 from "../../images/work4.jpg";
import work5 from "../../images/work5.jpg";
import work6 from "../../images/work6.jpg";
import CardsCollection from "./components/CardsCollection";

const data = [
    {name: "Card #1", text: "Some description for card #1", image: work1},
    {name: "Card #2", text: "Some description for card #2", image: work2},
    {name: "Card #3", text: "Some description for card #3", image: work3},
    {name: "Card #4", text: "Some description for card #4", image: work4},
    {name: "Card #5", text: "Some description for card #5", image: work5},
    {name: "Card #6", text: "Some description for card #6", image: work6}
]

const Gallery = () => {
    return (
        <div className="container my-4">
            <CardsCollection data={data} />
        </div>
    )
}

export default Gallery;