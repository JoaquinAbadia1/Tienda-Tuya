import React from 'react'
import eliminar from '../ItemCart/eliminar.png'
import { useContext } from'react'
import { CartContext } from '../../../Context/CartContext'

function ItemCart({id,name,quantity,price,img}) {
 const {removeItem, clearCart} = useContext(CartContext)

  return (
    <div style={{
      display:'flex',
      backgroundColor:'rgb(188, 127, 214)',
      justifyContent:'space-between',
      alignItems:'center',
      height:'100%',
      width:'100%',
      borderRadius:'10px',
      boxShadow:'0 0 10px 0 rgba(0,0,0,0.2)',
      transition:'all 0.3s ease-in-out',
      color:'#000',

    }}>
        <p>Quantity: {quantity}</p>
        <h3>{name}</h3>
        <p><b>Price: ${price}</b></p>
        <h2 style={{color:'#000', marginRight:'10px'}}>SubTotal: {price * quantity}</h2>
        <button className='opciona' style={{color:'#fff',marginRight:'15px', background:'red',borderRadius:'10px',}} onClick={()=>removeItem(id)}><img src={eliminar} style={{width: 'fitcontent', height:'40px'}}></img></button>
    </div>
  )
}

export default ItemCart