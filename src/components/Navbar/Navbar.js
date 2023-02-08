import React from 'react'
import style from './Navbar.css'
import BurguerButton from './BurguerButton.js'
import CartWidget from '../CartWidget/CartWidget'
import CartContainer from '../CartContainer/CartContainer'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Navbar(){
    const [clicked, setClicked] = useState(false)
    const handleClick = () =>{
        setClicked(!clicked)
    }
    return(
        
        <>
            <nav>

                <Link to ='/' className='vinculos'><h2>TiendaTuya</h2> </Link>
                <div className= {`links ${clicked? 'active':''}`}>
                <Link to ='/' className='vinculos'>INICIO</Link>
                <Link to ='/category/pc' className='vinculos'>PC</Link>
                <Link to ='/category/xbox' className='vinculos'>XBOX</Link>
                <Link to ='/category/ps5' className='vinculos'>PS5</Link>
                <Link to ='/category/NINTENDO' className='vinculos'>NINTENDO</Link>
                    
                    
                </div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} handleClick={handleClick}/>
                </div>
                <div className={`initial ${clicked ? 'active': ''}`}>
                <CartWidget/>
                </div>
                
            </nav>
        </>
    )
}
export default Navbar


