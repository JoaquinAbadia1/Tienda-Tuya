import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import {bd} from '../../services/firebaseConfig'
import {collection,query,where,documentId, getDocs, writeBatch, addDoc, doc} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading, { loading } from '../Loading/Loading'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Checkout() {
  const [loading, setLoading] = useState(false)
  const [orderId, setOrederId] = useState('')
  const {cart, total, clearCart} = useContext(CartContext)
  const navigate = useNavigate()
  const [comprador, setComprador]= useState({})
      function datosComprador (e)  {
        setComprador({
           ...comprador,
          [e.target.name]:e.target.value
        })
      }

  const createOrder = async (datosComprador)=>{  
    setLoading(true)

   try{
    const objOrder = {
      comprador,
      items: cart,
      total
    }
    
    toast('Orden Generada', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
    

    const batch = writeBatch(bd)
    const ids = cart.map (prod=>prod.id)
    const productsRef = query(collection(bd, 'products'),where(documentId(), 'in', ids ))
    const productsAddedToCartFromFirestore = await getDocs(productsRef)
    const {docs} = productsAddedToCartFromFirestore
    const outOfStock = []
    docs.forEach(document =>{
      const dataDoc = document.data()
      const stockBD= dataDoc.stock

      const productAddedToCart = cart.find(prod => prod.id === document.id)
      const prodQuantity = productAddedToCart.quantity

      if(stockBD >= prodQuantity){
        batch.update(doc(bd, 'products',document.id),{ stock : stockBD - prodQuantity})
      }else {
        outOfStock.push({id:document.id, ...dataDoc})
      }
    })
    if(outOfStock.length === 0) {
      await batch.commit()
      const orderRef = collection (bd, 'orders')
      const orderAdded = await addDoc(orderRef, objOrder)
      const {id} = orderAdded
      setOrederId(id)
      clearCart()
      setTimeout(()=>{
        navigate('/')
      },5000)
    }else{
      toast.warn('Hay Productos fuera de Stock', {
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
    }catch(error){
      console.error(error)
    }finally{
      setLoading(false)
   }
  }
  if(loading){
    return (
      <div>
        <h1>Generando orden</h1>
        <Loading/>
      </div>
    )}
  if(orderId){
    return (
      <div>
        <h1>El Id de su compra es: {orderId}</h1>
        <p>Gracias por comprar {comprador.fullname}</p>
        <p>Te enviaremos toda la informacion a {comprador.mail}</p>
      </div>
    )
  }
  if(cart.length === 0) {
    return (
        <h1>No hay productos en el carrito</h1>
    )
  }
  return (
    <div>
      <h1>Checkout</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Nombre y apellido</Form.Label>
       <Form.Control type="text" placeholder="Nombre y apellido" name='fullname' onChange={datosComprador} />
      </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail"  >
        <Form.Label>Email</Form.Label>
       <Form.Control type="email" placeholder="Enter email" name='mail' onChange={datosComprador}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic">
         <Form.Label>Numero de telefono</Form.Label>
         <Form.Control type="number" placeholder="Numero de telefono"  name='telephone' onChange={datosComprador}/>
      </Form.Group>
      </Form>
      <button onClick={createOrder}>Generar orden</button>
      <ToastContainer />
    </div>
  )
  
}
export default Checkout