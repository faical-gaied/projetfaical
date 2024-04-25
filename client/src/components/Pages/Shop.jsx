import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import Offers from '../Offers/Offers'
import NewCollections from '../NewCollections/NewCollections'
import NewsLetter from '../Abonnement/NewsLetter'

const Shop = () => {
  return (
    <div className=''>
        <Hero/>
        <Popular/>
        <div className='offert-space'><Offers/></div>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}

export default Shop