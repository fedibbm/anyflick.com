import React from "react";
import PropTypes from "prop-types";
import "./HomePage.css";
import Navbar from "../Navbar/Navbar";
import MovieCard from "../MovieCard/MovieCard";
import PageTitle from "../PageTitle/PageTitle"
import { useEffect,useState } from "react";

const HomePage = () =>{
  const [movies,setMovies] = useState([]);
  const [moviess, setMoviess] = useState([]);
  useEffect(()=>{
    // TMDB fetching url
    ///////////////////////
    // const url = 'https://api.themoviedb.org/3/authentication';
    const url = "https://api.themoviedb.org/3/discover/movie"
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDU4ZWU3NGZmZjQwZDA1ZmU3YmQ0MDJiMzNjMzkzMSIsInN1YiI6IjYzMDc0ZmVhMDM5OGFiMDA3ZDc1ZWQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qSFN_BIIz8I5DWGuFPFKxQ0UxP7sgRyIn7nRAxbDtEk'
        }
    };
    ///////////////////////
    fetch(url,options).then(res=>res.json()).then(res=> setMovies(res.results)).then(err=> console.error(err))
    
  },[]);
 
 
  return(
  <div className="HomePage">
    <PageTitle>Home Page</PageTitle>
    <div className="container movies-grid">
      {
        movies.map((movie,index)=>(
          <MovieCard key={index} movie = {movie} />
        ))
      }
    </div>
  </div>
)};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
