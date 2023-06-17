import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) =>(
  <Link to={"/movie/"+movie.id}>
    <div className='MovieCard'>
      <img src={"http://image.tmdb.org/t/p/w500"+movie.poster_path} alt="" height={400} width={300} className='movie-cover' />
      <div className='movie-card-details'>
        <h4 className='movie-title'>{movie.title}</h4>
        <ul className='movie-numbers'>
          <li>{movie.release_date.slice(0,4)}</li>
          <li>{movie.vote_average}/10</li>
        </ul>
      </div>
    </div>
  </Link>
);

MovieCard.propTypes = {};

MovieCard.defaultProps = {};

export default MovieCard;
