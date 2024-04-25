import React, { useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  const [foote, setfoote] = useState("magazin")
  return (
    <div className='footer'>
      <div className="footer-logo">
      <i class="fa-solid fa-bag-shopping"></i>
        <p>Service Client</p>
      </div>
      <ul className='footer-links'>
      <li onClick={()=>{setfoote("magazin")}}><Link style={{textDecoration:'none'}} to='/magazin'>Magazin</Link>{foote==="magazin"?<hr/>:<></>}</li>
      
        
        <li onClick={()=>{setfoote("produit")}}><Link style={{textDecoration:'none'}} to='/produit'>Produits</Link>{foote==="produit"?<hr/>:<></>}</li>
        <li onClick={()=>{setfoote("administration")}}><Link style={{textDecoration:'none'}} to='/administration'>Administration</Link>{foote==="administration"?<hr/>:<></>}</li>
        <li onClick={()=>{setfoote("apropos")}}><Link style={{textDecoration:'none'}} to='/apropos'>A propos</Link>{foote==="apropos"?<hr/>:<></>}</li>
        
        <li onClick={()=>{setfoote("contact")}}><Link style={{textDecoration:'none'}} to='/contact'>Contact</Link>{foote==="contact"?<hr/>:<></>}</li>
        
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container1">
        
        <Link style={{textDecoration:'none'}} to='/instagram'><i class="fa-brands fa-instagram" onClick={()=>{setfoote("instagram")}}>{foote==="instagram"?<hr/>:<></>}</i></Link>
        </div>
        <div className="footer-icons-container2">
        <i class="fa-brands fa-pinterest"></i>
        </div>
        <div className="footer-icons-container3">
        <Link style={{textDecoration:'none'}} to='/telephone'><i class="fa-brands fa-whatsapp" onClick={()=>{setfoote("telephone")}}>{foote==="telephone"?<hr/>:<></>}</i></Link>
        </div>
        
        </div>
        <div className="footer-copyright">
          <hr/>
          <p>Copyright @ 2024 - All Right Reserved. </p>

      </div>
    </div>
  )
}

export default Footer
