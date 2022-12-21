import "./ItemListContainer.css";

export default function ItemListContainer(props){
    return (
        <div className="item-list-container">
            <h1>{props.greeting}</h1>
        </div>
    );
}