import LineItem from "./LineItem";

const ItemList = ({items, handleCheck, deleteHandler}) => {
    return ( 
        <ul>
                {items.map((item)=> (
                    <LineItem
                    item = {item}
                    handleCheck = {handleCheck}
                    deleteHandler = {deleteHandler}
                    />
                ))}
            </ul>
     );
}
 
export default ItemList;