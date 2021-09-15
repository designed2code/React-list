import {FaTrashAlt} from "react-icons/fa"
const ItemList = ({items, handleCheck, deleteHandler}) => {
    return ( 
        <ul>
                {items.map((item)=> (
                    <li className="item" key={item.id}>
                        <input type="checkbox"
                        onChange = {() => handleCheck(item.id)}
                        checked={item.checked}
                        />
                        <label
                        style = {(item.checked) ? {textDecoration: 'line-through'}: null}
                        onDoubleClick = {() => handleCheck(item.id)}
                        >{item.item}</label>
                        <FaTrashAlt 
                            role="button" 
                            tabIndex = "0"
                            onClick= {()=>deleteHandler(item.id)}
                        />
                    </li>
                ))}
            </ul>
     );
}
 
export default ItemList;