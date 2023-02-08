import React,{useState} from 'react'
import style from './Navbar.css'

function BurguerButton(props) {
  return (
    
    <div onClick={props.handleClick} className={`icon nav-icon-6 ${props.clicked ? 'open': ''}`}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  )
}

export default BurguerButton