import React from 'react'
import './NewsLetter.css'
function NewsLetter() {
  return (
    <div className='newsletter'>
      <h1>Recevez des offres exclusives sur votre email</h1>
      <p>Abonnez-Vous!</p>
      <div>
        <input type='email' placeholder='votre id email'/>
        <button>abonnez-vous</button>
      </div>
    </div>
  )
}

export default NewsLetter
