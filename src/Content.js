import {FaTrashAlt} from "react-icons/fa"


   const Content = ({items, handleCheck, deleteHandler}) => {

    return ( 
        <main>
            {items.length ? (
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
            ) : (
                <p style={{marginTop: '2rem', color:'red'}}>Your List Is Empty</p>
            )}
        </main>
     );
}
 
export default Content;