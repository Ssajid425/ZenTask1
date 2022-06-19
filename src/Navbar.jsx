import React, {useState} from "react";
 import './navbar.css';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from 'react-icons/fa';
import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from "react-router-dom";
const Navbar =()=> {
    const [showMediaIcons,setShowMediaIcons]=useState(false);
    return(
        <>
        <nav className="main-nav">
         <div className="logo">
            
            <h2><span>S</span>paceX</h2>

         </div>
         <div className="menu-link">
            <ul>
                <li>
                <a href ="#">Home</a>
                </li>
                <li>
                <a href ="#">About</a>
                </li>
                <li>
                <a href ="#">Products</a>
                </li>
                <li>
                <a href ="#">contact</a>
                </li>
                
            </ul>
         </div>
          <div className="social-media">
            <ul className="social-media-desktop">
                <li>
                    <a href="https://facebook.com/spacenewsx/" target = " ">
                        <FaFacebookSquare className = "facebook"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/spacex/?hl=en&__coig_restricted=1" target = " ">
                        <FaInstagramSquare className= "instagram"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA" target = " ">
                        <FaYoutubeSquare className = "youtube"/>
                    </a>
                </li>        
            </ul>
           
            
             <div className="hamburger-menu">
                    <a href="#" onClick="() => setShowMediaIcons(!showMediaIcons)">
                        <GiHamburgerMenu/>
                    </a>
                        </div>
          </div>
            
            </nav>  
             {/* <section className="hero-section">
                <p >Welcome to SpaceX</p>
                </section>  */}
            </>
      
    );
}
export default Navbar;