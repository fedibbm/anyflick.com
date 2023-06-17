import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}`;
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDU4ZWU3NGZmZjQwZDA1ZmU3YmQ0MDJiMzNjMzkzMSIsInN1YiI6IjYzMDc0ZmVhMDM5OGFiMDA3ZDc1ZWQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qSFN_BIIz8I5DWGuFPFKxQ0UxP7sgRyIn7nRAxbDtEk",
          },
        };
        const response = await fetch(url, options);
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);
  useEffect(()=>{
    console.log(details)
  },[details])


  return (
    <div className="MovieDetails">
      <PageTitle>Movie Name</PageTitle>
      <div className="container">
        <div className="back-button-container">
          <Link to="/" className="back-button">
            {"<"} Back
          </Link>
        </div>
        <div className="movie-details">
          {details ? (
            <>
                <img
                  src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                  alt="cover"
                  className="movie-poster"
                  height={300}
                  width={200}
                />
              <div className="text-details">
                <h2 className="title">{details.title}</h2>
                <p className="description">{details.overview}</p>
                <div className="details">
                  <div className="RGC">
                    <p>
                      <span>Released:</span> {details.release_date}
                    </p>
                    <p><span>Genre:</span> {details.genres.map(genre=>genre.name).join(", ")}</p>
                    <p>
                      <span>Duration:</span> {details.runtime}
                    </p>
                  </div>
                  <div className="DCP">
                    <p>
                      <span>Language:</span> {details.original_language}
                    </p>
                    <p>
                      <span>Country:</span> {details.production_countries.map(genre=>genre.name).join(", ")}
                    </p>
                    <p>
                      <span>Production:</span> {details.production_companies.map(genre=>genre.name).join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};
MovieDetails.propTypes = {};

MovieDetails.defaultProps = {};

export default MovieDetails;
