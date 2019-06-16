import React from 'react';

const API_IMAGE = process.env.REACT_APP_API_IMAGE;

const MovieItem = ({ movie, onMovieClick }) => {
    return (
        <div onClick={onMovieClick} src={`${API_IMAGE}w300/${movie.poster_path}`} alt=""className="movie-item-container">
            <img src={`${API_IMAGE}w300/${movie.poster_path}`} alt="" />
            <h3>{movie.title}</h3>
            <h4>{movie.release_date}</h4>
        </div>
    )
};

export default MovieItem;
