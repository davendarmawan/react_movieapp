import React from "react";
import './footer.css';

function Footer (){
    return (
        <div className = "footer">
            Made by Daven Darmawan Sendjaya for Google Developer Students Clubs
            <div className = "power">
                Powered by <img src = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt = "The Movie DB" />
            </div>
        </div>
    )
}

export default Footer;