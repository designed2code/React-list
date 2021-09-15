import {FaTrashAlt} from "react-icons/fa"
const LineItem = ({item, handleCheck, deleteHandler}) => {
    return ( 

                    <li className="item">
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
     );
}
 
export default LineItem;