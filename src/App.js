import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {useState} from "react"
import AddItem from "./AddItem";

function App() {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')))
    const[newItem, setNewItem] = useState('')
    
    const setAndSaveItems = (newItems) => {
      setItems(newItems)
      localStorage.setItem('shoppinglist', JSON.stringify(newItems))
    }

    const addItem = (item) => {
    //   Incrementing the id when adding new item
    // If there are items present then get the id of the last element and add one to it else if no items present then the id will be 1
    const id = items.length ? items[items.length - 1].id + 1 : 1
    // Creating the newItem (Initially checked will be false since its a new item)
    const myNewItem = {id, checked:false, item}
    // New listItems will be all the previous items and the newItem added
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems)
    }
    const handleCheck = (id) => {
      // CheckBox Logic
      // If the item is already checked and if we click again then make it false with !item.checked else check the item
      const listItems = items.map((item) => item.id === id ? {...item,checked: !item.checked} : item)
      console.log(listItems)
      setAndSaveItems(listItems)
  }
  const deleteHandler = (id) => {
      // Delete Logic 
      // So for example if you click on first element that is your id = 1 and item.id = 1
      const listItems = items.filter((item) => item.id !== id)
      setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {
      e.preventDefault()
    //   To prevent Blank Items do not get submitted
    if(!newItem) return
    addItem(newItem)
    setNewItem('')
      

  }

  return (
    <div className='App'>
    <Header/>
    <AddItem
    newItem = {newItem}
    setNewItem = {setNewItem}
    handleSubmit = {handleSubmit}/>

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
