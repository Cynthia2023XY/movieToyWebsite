import './App.css';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';
import React from 'react';
import { LanguageProvider } from './context/LanguageContext';

function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('/data/movies.json');
      const data = await response.json();
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await fetch('public/data/movies.json');
      const data = await response.json();
      const singleMovie = data.find(movie => movie.imdbId === movieId);
      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <LanguageProvider>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies} />} ></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />} ></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Route>
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
