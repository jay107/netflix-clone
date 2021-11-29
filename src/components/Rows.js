import React, {useState, useEffect} from 'react';
import Carousel from 'react-multi-carousel';
import movieImg from "../image/movieImg.jpeg";
import Loading from "./Loading";
import 'react-multi-carousel/lib/styles.css';

const Rows = ({ topRated, netflixOriginal, trendingUrl, actionMoviesUrl, romanceMoviesUrl, horrorMoviesUrl, comedyMoviesUrl }) => {

    const [topRatedMovies, setTopRatedMovies] = useState("");
    const [netflixOriginalMovies, setNetflixOriginalMovies ] = useState("");
    const [trendingMovies, setTrendingMovies] = useState("");
    const [actionMovies, setActionMovies] = useState("");
    const [romanceMovies, setRomancemovies] = useState("");
    const [horrorMovies, setHorrorMovies] = useState("");
    const [comedyMovies, setComedyMovies] = useState("");

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    useEffect(() => {
        fetch(topRated).then(res => res.json()).then(data => setTopRatedMovies(data.results));
        fetch(netflixOriginal).then(res => res.json()).then(data => setNetflixOriginalMovies(data.results));
        fetch(trendingUrl).then(res => res.json()).then(data => setTrendingMovies(data.results));
        fetch(actionMoviesUrl).then(res => res.json()).then(data => setActionMovies(data.results));
        fetch(romanceMoviesUrl).then(res => res.json()).then(data => setRomancemovies(data.results));
        fetch(horrorMoviesUrl).then(res => res.json()).then(data => setHorrorMovies(data.results));
        fetch(comedyMoviesUrl).then(res => res.json()).then(data => setComedyMovies(data.results));
    }, []);

    if (!topRatedMovies || !netflixOriginalMovies || !trendingMovies || !actionMovies || !horrorMovies || !romanceMovies || !comedyMovies ) return <Loading />;
   
    var btn = document.getElementsByClassName("btn-adult");
    for( let i = 0; i < 20; i++ ){
    {topRatedMovies[i].adult && (
        btn.classList.add("btn-show")
    )} }


    return (
            <>
            <h1> Top Rated Movies </h1>
            
        <div className="toprated-movies">
            <Carousel responsive={responsive}
            width="100%"
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            {topRatedMovies.map((movie) => (
                <div className="toprated">
               <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` || {movieImg}} />
               <h4>{ movie?.title || movie?.name || movie?.original_title}</h4>
               <div className="toprated-buttons">
                   <button> {movie.vote_average} </button>
                   <button> {movie.release_date} </button>
                   <button> {movie.original_language} </button>
                    <button className="btn-adult">18+</button>
               </div>
                </div>
            ))}
            </Carousel>
        </div>

        <h1>NetFlix Originals Series</h1>
        <div className="toprated-movies">
            <Carousel responsive={responsive}
            width="100%"
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            {netflixOriginalMovies.map((movie) => (
                <div className="toprated">
               <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` || {movieImg}} />
               <h4>{ movie?.title || movie?.name || movie?.original_title}</h4>
               <div className="toprated-buttons">
                   <button> {movie.vote_average} </button>
                   <button> {movie.first_air_date} </button>
                   <button> {movie.original_language} </button>
                    <button className="btn-adult">18+</button>
               </div>
                </div>
            ))}
            </Carousel>
        </div>

        <h1>Trending on Netflix</h1>

        <div className="toprated-movies">
            <Carousel responsive={responsive}
            width="100%"
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            {trendingMovies.map((movie) => (
                <div className="toprated">
               <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` || {movieImg}} />
               <h4>{ movie?.title || movie?.name || movie?.original_title}</h4>
               <div className="toprated-buttons">
                   <button> {movie.vote_average} </button>
                   <button> {movie.first_air_date || movie?.release_date} </button>
                   <button> {movie.original_language} </button>
                    <button className="btn-adult">18+</button>
               </div>
                </div>
            ))}
            </Carousel>
        </div>

        <h1>Action Movies</h1>
        <div className="toprated-movies">
            <Carousel responsive={responsive}
            width="100%"
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            {actionMovies.map((movie) => (
                <div className="toprated">
               <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` || {movieImg}} />
               <h4>{ movie?.title || movie?.name || movie?.original_title}</h4>
               <div className="toprated-buttons">
                   <button> {movie.vote_average} </button>
                   <button> {movie.first_air_date || movie.release_date} </button>
                   <button> {movie.original_language} </button>
                    <button className="btn-adult">18+</button>
               </div>
                </div>
            ))}
            </Carousel>
        </div>


        {/* <h1> Romance movies Movies </h1>
            
            <div className="toprated-movies">
                <Carousel responsive={responsive}
                width="100%"
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                {romanceMovies.map((movie) => (
                    <div className="toprated">
                   <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` || {movieImg}} />
                   <h4>{ movie?.title || movie?.name || movie?.original_title}</h4>
                   <div className="toprated-buttons">
                       <button> {movie.vote_average} </button>
                       <button> {movie.release_date} </button>
                       <button> {movie.original_language} </button>
                        <button className="btn-adult">18+</button>
                   </div>
                    </div>
                ))}
                </Carousel>
            </div>
 */}

            <h1> Horror movies Movies </h1>
            
            <div className="toprated-movies">
                <Carousel responsive={responsive}
                width="100%"
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                {horrorMovies.map((movie) => (
                    <div className="toprated">
                   <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` || {movieImg}} />
                   <h4>{ movie?.title || movie?.name || movie?.original_title}</h4>
                   <div className="toprated-buttons">
                       <button> {movie.vote_average} </button>
                       <button> {movie.release_date} </button>
                       <button> {movie.original_language} </button>
                        <button className="btn-adult">18+</button>
                   </div>
                    </div>
                ))}
                </Carousel>
                </div>

                <h1> Comedy movies Movies </h1>
            
            <div className="toprated-movies">
                <Carousel responsive={responsive}
                width="100%"
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                {comedyMovies.map((movie) => (
                    <div className="toprated">
                   <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` || {movieImg}} />
                   <h4>{ movie?.title || movie?.name || movie?.original_title}</h4>
                   <div className="toprated-buttons">
                       <button> {movie.vote_average} </button>
                       <button> {movie.release_date} </button>
                       <button> {movie.original_language} </button>
                        <button className="btn-adult">18+</button>
                   </div>
                    </div>
                ))}
                </Carousel>
                </div>
        </>
    )
}

export default Rows
