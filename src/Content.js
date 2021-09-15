import { useState } from "react"
import {FaTrashAlt} from "react-icons/fa"
// How to use the useState Hook
// 1. import
// 2. Initialize the variables using destructuring and set the initial state
// 3. use the first variable in any HTML element using the {}
// 4. Make a button and add a reference to the function
// 5. Call the state updating function inside the event handling function
const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ])
    const handleCheck = (id) => {
        // CheckBox Logic
        // If the item is already checked and if we click again then make it false with !item.checked else check the item
        const listItems = items.map((item) => item.id === id ? {...item,checked: !item.checked} : item)
        console.log(listItems)
        setItems(listItems)
        localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    }
    const deleteHandler = (id) => {
        // Delete Logic 
        // So for example if you click on first element that is your id = 1 and item.id = 1
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    }

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