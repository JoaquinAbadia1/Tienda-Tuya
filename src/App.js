import './App.css';
import Navbar from './components/Navbar/Navbar'
import IntemListContainer from './components/IntemListContainer'
import Checkout from './components/Checkout/Checkout';
import IntemDetailContainer from './components/IntemDetailContainer/IntemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {CartProvider} from './Context/CartContext.js'
import CartContainer from './components/CartContainer/CartContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='App'>
      <CartProvider>
        <ToastContainer />
       <BrowserRouter>
         <Navbar/>
         <Routes>
           <Route path='/' element = {<IntemListContainer greeting='Bienvenidos a TiendaTuya'/>}/>
           <Route path='/category/:categoryId' element = {<IntemListContainer greeting='Productos Buscados'/>}/>
           <Route path='/item/:productId' element = {<IntemDetailContainer/>}/>
           <Route path='/cart' element = {<CartContainer/>}/>
           <Route path='/checkout' element = {<Checkout/>}/> 
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;


