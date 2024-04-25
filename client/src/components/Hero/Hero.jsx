import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h1>Nouveaux Arrivages Seulement</h1>
            <div>
                <div className="hero-hand-icon">
                    <p>Nouveau!</p>
                    <i class="fa-solid fa-hands-clapping"></i>
                </div>
                
                <div className="hero-left1">
                <p>Collections</p>
                </div>
                <div className="hero-left2">
                <p>Pour Tout<string> Le Monde</string> </p>
                </div>

            </div>
        </div>
        <div className="hero-right">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcsDddu8uQXXZLVcSiLj7ExzO1Vjeme_7aw&s'></img>
            <div className="hero-latest-btn">
                <button><h3>Dernière Collection</h3><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
        
        
    </div>
  )
}

export default Hero