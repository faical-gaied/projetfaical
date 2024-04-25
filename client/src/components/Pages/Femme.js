import React from 'react'
import './Femme.css'
import Item from '../Cart/Cart'
import { useSelector } from 'react-redux'
function Femme() {
  const products=useSelector((store)=>store.produit?.product) 
  const data_product =products?.filter((el)=>el.category=="femme")
  return (
    <div className='flat'>
      <div className='flat50h'>
        <div className='flat-text'>
<h1>REMISE 50%</h1>

<h2>Du 15 Decembre au 15 Janvier</h2><br/>
<h3>Profiter Maintenant</h3>
        </div>
        <img src='https://www.ha.com.tn/media/wysiwyg/femweb.jpg' alt='femme50'/>
      </div>
      <div className='flat-data'>
        {data_product?.map((item)=>{
            return <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Femme
