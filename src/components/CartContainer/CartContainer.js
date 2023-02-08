import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import style from '../CartContainer/CartContainer.css'
import ItemCart from '../CartContainer/ItemCart/ItemCart'
import Card from 'react-bootstrap/Card';


function CartContainer() {
  const {cart} = useContext(CartContext)
  return (
    <div>
      <h1>Carrito</h1>
      
        {
         cart.map(prod => <ItemCart key={prod.id} {...prod} />)
      
        } 
      
      <Link to ='/checkout' className='boton'>Checkout</Link>
      
    </div>
  )
}

export default CartContainer