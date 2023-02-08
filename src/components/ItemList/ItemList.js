import Cardd from "../Card/Card"
import style from "./ItemList.css"
const ItemList = ({products}) =>{

    return(
        <div className="contenedor">
            {products.map(prod=> <Cardd key= {prod.id} {...prod}/>)}
        </div>
    )
}
export default ItemList