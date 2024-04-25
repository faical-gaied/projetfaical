import React from 'react'
import { useSelector } from 'react-redux'

const Listcart = () => {
    const commandes=useSelector((store)=>store.commande?.commande)
    console.log(commandes)
  return (
    <div>
      {commandes?.map((el)=>(
        <>
        <img src={el?.image} />
      <h1>{el?.nomprduit}</h1>
      <h3>{el?.price} DT</h3>
      </>
      ))}
    </div>
  )
}

export default Listcart
