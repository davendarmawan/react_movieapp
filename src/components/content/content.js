import React, { useState } from 'react';
import Header from '../header/header';
import Wishlistheader from '../wishlistHeader/wishlistHeader';
import './content.css';
import love from '../header/love.png';

function Content () {
    // Wishlist Settings
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (movie) => {
        setWishlist ([...wishlist, {...movie}]);
    };

    const removeFromWishlist = (movieToRemove) => {
        setWishlist(wishlist.filter(movie => movie !== movieToRemove))
    };

    // Information Settings
    const [addInfo, setaddInfo] = useState([]);

    const addToInfo = (movieinfo) => {
        setaddInfo ([...addInfo, movieinfo])
    }

    const removeFromInfo = (movieinfoToRemove) => {
        setaddInfo(addInfo.filter(movieinfo => movieinfo !== movieinfoToRemove))
    };

    // Function to Change Page
    const [page, setPage] = useState('mainPage');

      // Data of movies
    const [movies] = useState([
        {
            title: 'No Time to Die',
            poster: 'https://www.themoviedb.org/t/p/w1280/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg',
            genre: 'Adventure, Action, Thriller',
            rating: '7.5/10',
            desc: 'Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
            year: '2021',
        },
        {
            title: 'The Last Duel',
            poster: 'https://www.themoviedb.org/t/p/w1280/zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg',
            genre: 'Action, Drama, History, Thriller',
            rating: '7.7/10',
            desc: 'King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire by challenging him to a duel.',
            year: '2021',
        },
        {
            title: 'Nussa',
            poster: 'https://www.themoviedb.org/t/p/w1280/94Hgof6lzqZL2i30SnYgRl0Q5Pn.jpg',
            genre: 'Animation, Family',
            rating: '9.1/10',
            desc: "Planning to impress his father who is coming home after being abroad for a year, Nussa the smart 9-year-old kid participates in his school’s science competition. But when he receives news that his father cancelled his trip home and is unable to attend the competition, and at the same time a new, smart student named Jonni quickly becomes his rival in the school's science competition, Nussa learns the true meaning of gratitude.",
            year: '2021',
        },
        {
            title: 'The Avengers',
            poster: 'https://www.themoviedb.org/t/p/w1280/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
            genre: 'Sci-Fi, Action, Adventure',
            rating: '8/10',
            desc: 'When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!',
            year: '2012',
        },
        {
            title: 'Eternals',
            poster: 'https://www.themoviedb.org/t/p/w1280/6AdXwFTRTAzggD2QUTt5B7JFGKL.jpg',
            genre: 'Action, Adventure, Sci-Fi',
            rating: '6.9/10',
            desc: 'The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.',
            year: '2021',
        },
        {
            title: 'Dune',
            poster: 'https://www.themoviedb.org/t/p/w1280/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
            genre: 'Science Fiction, Adventure',
            rating: '8.2/10',
            desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
            year: '2021',
        },
        {
            title: 'Black Widow',
            poster: 'https://www.themoviedb.org/t/p/w1280/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg',
            genre: 'Action, Adventure, Sci-Fi',
            rating: '6.7/10',
            desc: 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.',
            year: '2021',
        },
        {
            title: 'Mulan',
            poster: 'https://www.themoviedb.org/t/p/w1280/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg',
            genre: 'Adventure, Fantasy',
            rating: '5.7/10',
            desc: 'When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.',
            year: '2020',
        },
        {
            title: 'Foundation',
            poster: 'https://www.themoviedb.org/t/p/w1280/4StTTWsS0MBGL8JMH1JD1VwdNWJ.jpg',
            genre: 'Sci-Fi & Fantasy, Drama',
            rating: '7.3/10',
            desc: 'Follow a band of exiles on their monumental journey to save humanity and rebuild civilization amid the fall of the Galactic Empire.',
            year: '2021',
        },
        {
            title: 'Lamb',
            poster: 'https://www.themoviedb.org/t/p/w1280/gP9yviboTGWGolqUZKIB1UkF1C2.jpg',
            genre: 'Drama, Horror, Mystery',
            rating: '6.3/10',
            desc: 'An Icelandic couple live with their herd of sheep on a beautiful but remote farm. When they discover a mysterious newborn on their land, they decide to keep it and raise it as their own. This unexpected development and the prospects of a new family brings them much joy before ultimately destroying them.',
            year: '2021',
        },
    ]);

    const mainPage = () => (
        <>
        <Header setPage = {setPage}/>

        <div className = "container">
            <div className = "headings">List of Best Movies</div>

            <div className = "movie-lists">
                {movies.map((movie, idx) => (
                    <div className = "movie-box" key = {idx}>
                        <img className = "movie-poster" src = {movie.poster} alt = {movie.title} />
                        <div className = "movie-contents">
                            <div className = "movie-title">{movie.title}</div>
                            <div className = "movie-genre">{movie.genre}</div>
                        </div>
                        <div className = "button_container">
                            <button className = "info" onClick = {() => {
                                setPage('pageInfo');
                                addToInfo(movie);
                            }}>i</button>
                            
                            <button onClick = {() => addToWishlist(movie)} className = "wishlist">
                                <img src = {love} alt = "love" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );

    const pageInfo = () => (
        <>
        <Header setPage = {setPage}/>
        <div className = "container">
            {addInfo.map((movieinfo, idy) => (
            <>
                <div className = "headings">Movie Information</div>
                <div className = "info_list">
                    <img className = "info_poster" src = {movieinfo.poster} alt = {movieinfo.title} />
                    <div className = "info_holder">
                        <div className = "info_contents">
                            <div className = "info-title">{movieinfo.title} ({movieinfo.year})</div>
                            <div className = "info-genre">{movieinfo.genre}</div>
                            <div className = "info-rating">IMDb Rating: {movieinfo.rating}</div>
                            <div className = "movie-title">Summary</div>
                            <div className = "info-desc">{movieinfo.desc}</div>
                        </div>
                    </div>
                </div>
                
                <div className = "close_container">
                    <button className = "info-close" onClick = {() => {
                        setPage('mainPage');
                        removeFromInfo(movieinfo);
                    }}>&#8592; Back to Main Page</button>
                </div>
            </>
            ))}
        </div>
        </>
    );

    const pageWishlist = () => (
        <>
            <Wishlistheader setPage = {setPage} />

            <div className = "wishlist_container">
                <div className = "headings">Movie Wishlist</div>
                <div className = "wishlist_lists">
                    {wishlist.map((movie, idz) => (
                    <>
                        <div className = "wishlist_box" key = {idz}>
                            <img className = "wishlist_poster" src = {movie.poster} alt = {movie.title} />
                            <div className = "wishlist_contents">
                                <div className = "movie-title">{movie.title}</div>
                            </div>
                            <div className = "button_container">
                                <button className = "remove" onClick = {() => removeFromWishlist(movie)}>X</button>  
                            </div>
                        </div>
                    </>
                    ))}
                </div>
            </div>
        </>
    );

    return (
        <>
            {page === 'mainPage' && mainPage()}
            {page === 'pageInfo' && pageInfo()}
            {page === 'pageWishlist' && pageWishlist()}
        </>
    );
}

export default Content;