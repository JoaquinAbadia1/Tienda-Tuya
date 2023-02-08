import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import { bd } from '../../services/firebaseConfig'
import Loading, { loading } from '../Loading/Loading'
import style from '../IntemDetailContainer/IntemDetailContainer.css'

function IntemDetailContainer() {
  const [product, setProduct] = useState({})
  const {productId} = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const docRef = doc(bd, 'products', productId)
    getDoc(docRef).then (response => {
      const dataProduct = response.data()
      const productsAdapted = {id: response.id, ...dataProduct}
      setProduct(productsAdapted)
    }).catch(error=>{
      console.log(error)
    }).finally(() => {
      setLoading(false)
  })
  }, [productId])
  if (loading){
    return (
      <div>Cargando...
        <Loading/>
      </div>
      
    )
  }
  return (
    <div >
        <h1 className='titulo'>Detalle del Producto</h1>
        <ItemDetail {...product} />
    </div>
  )
}

export default IntemDetailContainer