import React from 'react'
import './CartWidget.css'
import { useContext } from'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

function CartWidget({getTotalQuantity}) {
  const {totalQuantity} = useContext(CartContext)

  return (
    <Link to='/cart ' className='contenedor'>
        <img src='./img/carrito.png' alt='Carrito' className='CartWidget'/>
        {totalQuantity}
    </Link>
  )
}

export default CartWidget