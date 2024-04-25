import React from 'react'
import './NewCollections.css'

import Item from '../Cart/Cart'
import { New_Collection } from '../Data/New_Collections'
function NewCollections() {
  return (
    <div className='new-collections '>
      <div className='tiret gappe'>
      <h1>Nouvelles Collections</h1>
      <hr/>
      </div>
      <div className="new-collections-item">
        {New_Collection.map((item)=>{
            return <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}

      </div>
    </div>
  )
}

export default NewCollections
