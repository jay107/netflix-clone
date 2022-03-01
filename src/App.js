import React from "react";
import Banner from "./components/Banner";
import Search from "./components/Search";
import { Switch, Route } from "react-router-dom";
import Rows from "./components/Rows";
function App() {

  const api_key = "95dcff51f627dc0d789c332bd19a6c5b";
  const trendingUrl = "https://api.themoviedb.org/3/trending/all/week?api_key=95dcff51f627dc0d789c332bd19a6c5b";
  const netflixOriginal = "https://api.themoviedb.org/3/discover/tv?api_key=95dcff51f627dc0d789c332bd19a6c5b&with_network=123";
  const topRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=95dcff51f627dc0d789c332bd19a6c5b";
  const actionMovies = `https://api.themoviedb.org/3/discover/movie?api_key=95dcff51f627dc0d789c332bd19a6c5b&with_genres=28`;
  const romanceMovies =`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=18749`;
  const horrorMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`;
  const comedyMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35`;

  return (
   <>
   {/* <Navbar /> */}
   <Switch>
     <Route path="/" exact>
   <Rows topRated={topRated} 
      netflixOriginal={netflixOriginal} 
      trendingUrl={trendingUrl} 
      actionMoviesUrl={actionMovies}
      romanceMoviesUrl={romanceMovies}
      horrorMoviesUrl={horrorMovies}
      comedyMoviesUrl={comedyMovies}
   />
   </Route>
   <Route path="/search">
     <Search />
   </Route>
   </Switch>
   </>
  );
}

export default App;
