const Card = (props) => {
    return (
        <div className="col-sm-12 col-md-4 col-lg-3 mb-4">
            <div class="card">
                <img src={props.image} class="card-img-top" alt={props.name} />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.text}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
