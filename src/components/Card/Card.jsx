import "./Card.css"
import ItemCount from "../ItemCount/ItemCount";

function Card(props){
    const {id, name, price, imgurl, detail, stock} = props.product;
    
    return (
        <>
            <div className="card text-dark m-2 p-3">
                <div class="row g-0">
                    <div className="col-md-4">
                        <img src={imgurl} className="img-product" alt={name} />
                    </div>
                    <div className="col-md-8 position-relative">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text mt-3 mb-5"><h4><small>$ {price}</small></h4></p>
                        <button className="btn btn-outline-primary position-absolute bottom-0 end-0 m-1">Ver mas</button>
                        <div className="position-absolute bottom-0 start-0">
                            <ItemCount key={id} stock={stock}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;