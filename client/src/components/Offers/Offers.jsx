import React from 'react'
import './Offers.css'
function Offers() {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offert pour vous</h1>
        <p>Uniquement pour les produits les plus vendus</p>
        <button>Maintenant vérifier</button>

      </div>
      <div className="offers-right">
        <img src='https://images.only.com/15197451/3296636/003/only-blazermed3-4aermer-sort.jpg?v=49a40b718ab0bb2c6f8dc08029bd8da4&format=webp&width=640&quality=80&key=10-0-3' alt=""/>

      </div>
    </div>
  )
}

export default Offers
