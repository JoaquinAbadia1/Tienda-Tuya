import React, { useEffect, useState } from 'react'
import {getProducts, getProductsByCategory} from "../bbdd"
import ItemList from "../components/ItemList/ItemList"
import { useParams } from 'react-router-dom'
import {getDocs, collection,query, where} from 'firebase/firestore'
import { bd } from '../services/firebaseConfig'
const IntemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams()
   
  useEffect(()=>{
    
    const collectionRef = categoryId ? query(collection (bd , 'products'),where('category', '==' , categoryId)) :collection (bd , 'products')
    
    getDocs(collectionRef).then(response =>{
      console.log(response);
      const productsAdapted = response.docs.map(doc =>{
        const data = doc.data()
        return {id:doc.id, ...data  }
      })
      setProducts(productsAdapted)
    }).catch(error => {
      console.log(error)
    })
  }, [categoryId]) 
  return (
    <div className='contenedor'>
      <h1>{greeting}</h1>
      <ItemList products = {products}/>
    </div>
  )
}

export default IntemListContainer