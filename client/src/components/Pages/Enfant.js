import React from 'react'
import './Enfant.css'
import Item from '../Cart/Cart'
import { useSelector } from 'react-redux'
function Enfant() {
  const products=useSelector((store)=>store.produit?.product) 
  const collection_enfant=products?.filter((el)=>el.category=="enfant")
  return (
    <div className='flat'>
      <div className='flat50h'>
        <div className='flat-text'>
<h1>REMISE 50%</h1>

<h2>Du 15 Decembre au 15 Janvier</h2><br/>
<h3>Profiter Maintenant</h3>
        </div>
        <img src='https://www.ha.com.tn/media/wysiwyg/enfdesktop.jpg' alt='enfant50'/>
      </div>
      <div className='flat-data'>
        {collection_enfant?.map((item)=>{
            return <Item item={item}/>
        })}
      </div>
    </div>
  )
}

export default Enfant
