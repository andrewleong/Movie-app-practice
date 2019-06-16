import React from 'react';

const API_IMAGE = process.env.REACT_APP_API_IMAGE;

const MovieItem = ({ movie, onMovieClick }) => {
    return (
        <div className="col-sm-12 movie-item-container" onClick={onMovieClick} src={`${API_IMAGE}w300/${movie.poster_path}`} alt="">
            <img src={`${API_IMAGE}w300/${movie.poster_path}`} alt="" />
            <h5>{movie.title}</h5>
            <h6>{movie.release_date}</h6>
        </div>
    )
};

export default MovieItem;
