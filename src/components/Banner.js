import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Banner = ({ trendingUrl }) => {
    const [movie, setMovie] = useState("");
    const [search, setSearch] = useState("avatar");
    const [searchMovie, setSearchMovie] = useState("");

    // const responsive = {
    //     desktop: {
    //     breakpoint: { max: 3000, min: 1024 },
    //     items: 1,
    //     slidesToSlide: 1 // optional, default to 1.
    //     },
    //     tablet: {
    //     breakpoint: { max: 1024, min: 464 },
    //     items: 1,
    //     slidesToSlide: 1 // optional, default to 1.
    //     },
    //     mobile: {
    //     breakpoint: { max: 464, min: 0 },
    //     items: 1,
    //     slidesToSlide: 1 // optional, default to 1.
    //     }
    // };

    useEffect(() => {
        fetch(trendingUrl).then(res => res.json()).then(data => setMovie(data.results[0]));
        
        fetch(`http://www.omdbapi.com/?t=${search}&apikey=5978a012`).then(res => res.json()).then(data => setSearchMovie(data));

    }, [search]);

   
    if (!movie) return "";
    
    return (
        <>
          
        </>
    )
}

export default Banner
