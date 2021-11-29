import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Banner = ({ trendingUrl }) => {
    const [movie, setMovie] = useState("");

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

    }, []);

    if (!movie) return "";

    return (
        <>
            <header className="banner-header">

                <div className="banner-heading">
                    <h2> <span>NETFLIX</span> original</h2>
                    <h1>{movie?.title || movie?.name || movie?.original_name} </h1>
                    <div className="header-buttons">
                        <button>{movie?.media_type}</button>
                        <button>{movie?.original_language}</button>
                        <button>{movie?.release_date}</button>
                        <button>{movie?.vote_average}</button>
                    </div>
                    <p> {movie?.overview} </p>
                </div>
                <div className="banner-img" style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}>
                </div>
            </header>
        </>
    )
}

export default Banner
