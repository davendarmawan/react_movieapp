import React from 'react'
import './header.css'
import logo from '../images/favicon.png'
import love from './love.png';

function Header({setPage}){
    return (
        <div className = "header">
            <div className = "logo">
                <img src = {logo} alt = "Movie Logo" />
                <div className = "title"><h3>ReactFlix</h3></div>
            </div>
        
            
            <button className = "button" onClick = {() => setPage('pageWishlist')}>
                <img src = {love} alt = "love" /> Wishlist
            </button>
        </div>
    );
}

export default Header;