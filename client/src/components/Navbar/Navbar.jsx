import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setmenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCnBC4eHw6741A41piFlRnJJl6yExvZ6d9KA&s'/>
         <p>FG Commerce</p>   
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("homme")}}><Link style={{textDecoration:'none'}} to='/homme'>Homme</Link>{menu==="homme"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("femme")}}><Link style={{textDecoration:'none'}} to='/femme'>Femme</Link>{menu==="femme"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("enfant")}}><Link style={{textDecoration:'none'}} to='/enfant'>Enfants</Link>{menu==="enfant"?<hr/>:<></>}</li>
            
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button> </Link>
            <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
