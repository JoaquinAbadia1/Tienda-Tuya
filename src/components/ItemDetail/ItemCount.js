import '../ItemDetail/ItemCount.css'
import { useState } from 'react'
import {stock} from '../../bbdd'

const ItemCount = ({stock = 0 ,onAdd, initial = 1})=> {
   const [count, setCount] = useState(initial)

   const decrement = () => {
      if(count > 1) {
         setCount(prev => prev - 1)
        }     
    } 
   const increment = () => {
       if(count < stock) {
           setCount(prev => prev + 1)
       }
   }
   return(
       <div className='contador'>          
            <div className='control'>
                <button className="boton" onClick={decrement}>-</button>
                <h4 className='numero'>{count}</h4>
                <button className="boton" onClick={increment}>+</button>
            </div>
            <div>
                <button className="boton" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount