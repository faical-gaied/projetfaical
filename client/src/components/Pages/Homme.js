import React from 'react'
import './Homme.css'
import Item from '../Cart/Cart'
import { useSelector } from 'react-redux'
function Homme() {
  const products=useSelector((store)=>store.produit?.product) 
  const collection_homme =products?.filter((el)=>el.category=="homme")
  console.log(collection_homme)
  return (
    <div className='flathomme'>
      <div className='flat50h'>
        <div className='flathomme-text'>
<h1>REMISE 50%</h1>

<h2>Du 15 Decembre au 15 Janvier</h2><br/>
<h3>Profiter Maintenant</h3>
        </div>
        <img src='https://hamedia.b-cdn.net/catalog/product/cache/1/small_image/440x/17f82f742ffe127f42dca9de82fb58b1/0/0/0032903_3_.jpg' alt='homme50'/>
      </div>
      <div className='flathomme-data'>
        {collection_homme?.map((item)=>{
            return <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Homme
