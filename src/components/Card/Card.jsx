import "./Card.css"
import ItemCount from "../ItemCount/ItemCount";

function Card(props){
    const {id, name, price, imgurl, detail, stock} = props.product;
    
    return (
        <>
            <div className="card d-inline-block text-dark">
                <img src={imgurl} className="card-img-top" height="220px" alt={name} />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text"><h3>$ {price}</h3></p>
                    <button className="btn btn-outline-dark">Ver mas</button>
                </div>
                <ItemCount key={id} stock={stock}/>
            </div>
        </>
    );
}

export default Card;