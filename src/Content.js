import ItemList from "./ItemList";

const Content = ({items, handleCheck, deleteHandler}) => {

    return ( 
        <main>
            {items.length ? (
            <ItemList
            items = {items}
            handleCheck = {handleCheck}
            deleteHandler = {deleteHandler}
            />
            ) : (
                <p style={{marginTop: '2rem', color:'red'}}>Your List Is Empty</p>
            )}
        </main>
     );
}
 
export default Content;