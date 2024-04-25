import React, { useState } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addcommande } from '../../JS/commandeSlice'
function Item({item}) {
  const user=useSelector((store)=>store.user?.user)
  const dispatch = useDispatch();
  const [cart, setcart] = useState({
    nameuser:user?.name,
    Iduser:user?.id,
    nomprduit:"",
    price:"",
    quantite:"1"
  })

  return (
    <div className='item'>
     <img src={item.image}/>
      <p>{item.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
            {item.price}Dt
        </div>
        <div className="item-price-old">
            {item.old_price}Dt

        </div>
        <button onClick={()=>(setcart({...cart,nomprduit:item.name,price:item.price}),dispatch(addcommande(cart)))}>ADD to Cart</button>

      </div>
    </div>
  )
}

export default Item
