import { useState, createContext } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
          setCart(prev => {
            return [...prev, productToAdd]
          })
        } else {
          toast.warn('Producto ya agregado', {
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
    }

    const isInCart = (id) => cart.some(prod => id === prod.id)
    const removeItem = (id) => {
      const nuevoCarrito = cart.filter(prod => prod.id!== id)
      setCart(nuevoCarrito)
      toast('Eliminado Correctamente', {
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

    const getTotalQuantity = () => {
      let accu = 0

      cart.forEach(prod => {
        accu += prod.quantity
      })

      return accu
    }
    const getTotal = () =>{
      let total = 0
      cart.forEach(prod =>{
        total += prod.quantity * prod.price
      })
      return total
    }

    const totalQuantity = getTotalQuantity()
    const total = getTotal()

    const clearCart = () => {
      setCart([])
    }

    return (
        <CartContext.Provider value={{cart,addItem, isInCart, totalQuantity, total, clearCart, removeItem}}>
            { children }
            <ToastContainer />
        </CartContext.Provider>
        
    )
}
