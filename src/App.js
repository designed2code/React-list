import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {useState} from "react"
import AddItem from "./AddItem";

function App() {

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
    const[newItem, setNewItem] = useState('')
    
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
    <div className='App'>
    <Header/>
    <AddItem/>
    <Content
    items = {items}
    handleCheck = {handleCheck}
    deleteHandler = {deleteHandler}/>
    <Footer
    length = {items.length}/>
    </div>
    
  );
}

export default App;
