import React from 'react';
import './wishlistHeader.css';
import logo from '../images/favicon.png';

function Wishlistheader({setPage}){
    return (
        <div className = "header">
            <div className = "logo">
                <img src = {logo} alt = "Movie Logo" />
                <div className = "title"><h3>ReactFlix</h3></div>
            </div>
        
            
            <button className = "button" onClick = {() => setPage('mainPage')}>
                &#8592; Main Page
            </button>
        </div>
    );
}

export default Wishlistheader;