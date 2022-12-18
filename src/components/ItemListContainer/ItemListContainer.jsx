import "./ItemListContainer.css";

export default function ItemListContainer(props){
    return (
        <div className="item-list-container">
            <h1>{props.children}</h1>
        </div>
    );
}