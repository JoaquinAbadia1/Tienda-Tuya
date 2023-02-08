import style from '../ItemDetail/ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from '../ItemDetail/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemDetail = ({ id, name, category, img, price, stock, description}) => {
    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        addItem({ id, name, price, quantity})
    }
    const message =()=> {
        toast('Producto agregado correctamente', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    return (
        <article >
            <h1 className="titulo">{name}</h1>
            <section className="container">
                <img src={img} alt={name} className="itemImg"/>
                <p className="itemInfo">Descripción: {description}</p>
            </section> 
            <div className="contador">
                {
                    isInCart(id) ? (
                        <button onClick={message}className='Terminar'><Link to='/cart'>Terminar compra</Link></button>
                    ) : (
                        <ItemCount stock={stock} onAdd={handleOnAdd}/>
                    )
                }  
                <ToastContainer />
            </div> 
            <div className='footer'>
            <p className="parrafo">Stock: {stock}</p>
            <p className="parrafo">Categoria: {category}</p>
            <p className="precio"><b>Precio: {price}</b></p>
            </div>
            
        </article>
    )
}

export default ItemDetail
