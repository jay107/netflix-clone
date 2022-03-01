import React,{useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const Search = () => {

    const [search, setSearch] = useState("shawshank redemption");
    const [searchMovie, setSearchMovie] = useState("");

    useEffect(() => {

        fetch(`http://www.omdbapi.com/?t=${search}&apikey=5978a012`).then(res => res.json()).then(data => setSearchMovie(data));

    }, [search]);

        if(!searchMovie) return "Loading...";

    return (
        <>
        <div className='search-main-comp'>
        <div className='searchComp'>
            <Link to="/" className='to-main-link animate__pulse animate__animated animate__infinite'> NETFLIX </Link>
        <div className='main-searchbar'>
       <i class="fas fa-search"></i>
       <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder='search for movies..'  />
       </div>
       </div> 
       <div className='searchMain'> 
    
        <div className='searchMainRow-1'>
            <div className='row-1-div'>
                <h1>{searchMovie.Title}</h1>
                <p><span>Release Date-</span> {searchMovie.Released || "NA"}</p>
                <p><span>Genres - </span>{searchMovie.Genre || "NA"} </p>
                <p><span>Language , Country -</span> {searchMovie.Language || "NA"}, {searchMovie.Country || "NA"} </p>
                {/* <p>Storyline - {searchMovie.Plot}</p> */}
                <p><span>Director -</span> {searchMovie.Director || "NA"} </p>
                <p><span>Actors -</span> {searchMovie.Actors || "NA"} </p>
                <p><span>BoxOffice -</span> {searchMovie.BoxOffice || "NA"} </p>
                <p><span>Imdb -</span> {searchMovie.imdbRating || "NA"} / {searchMovie.imdbVotes || "NA"} votes</p>
                <p><span>Awards-</span> {searchMovie.Awards || "NA"}</p>
            </div>
        </div>
        <div className='searchMainRow-2'>
            <div className='row-2-div'>
                <img  src={searchMovie.Poster} />
            </div>
        </div>
       </div>
      
       </div>
       </>
    )
}

export default Search
