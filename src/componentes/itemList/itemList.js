import Item from "../item/item"
import "./itemList.css"

const ItemList = ({autos}) =>{
    return(
        <div className="listGroup">
            {autos.map(a=> <Item key={a.id}{...a}/>)}
        </div>
    )
}

export default ItemList