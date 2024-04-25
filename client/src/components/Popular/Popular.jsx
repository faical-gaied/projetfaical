import React from 'react'
import './Popular.css'
// import { data_product } from '../Data/DataFemme'
import Item from '../Cart/Cart'
import { useSelector } from 'react-redux'

function Popular() {
  const data_product=useSelector((store)=>store.produit?.product)
  return (
    <div className='popular'>
      <h1>Populaire Pour Femme</h1>
      <hr/>
      <div className="popular-item">
        {data_product?.map((item)=>{
            return <Item  item={item}/>
        })}
      </div>
    </div>
  )
}

export default Popular
