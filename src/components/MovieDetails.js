import React from 'react';

const API_IMAGE = process.env.REACT_APP_API_IMAGE;

const MovieDetails = ({ movie, toggleModal }) => {
    return (
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Release date: {movie.release_date}</h5>
                    <button type="button" className="close" data-dismiss="modal" onClick={toggleModal} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="card">
                        <img className="card-img-top" src={`${API_IMAGE}w500/${movie.poster_path}`} alt="" />
                        <div className="card-img-overlay white">
                            <h3 className="card-title">{movie.title ? movie.title : 'N/A'}</h3>
                            <h4 className="card-subtitle"><span style={{color:"#fbb829"}}>IMDB</span> ratings: {movie.vote_average}</h4>
                            <p className="card-text">{movie.overview ? movie.overview : 'N/A'}</p>
                            <p className="card-text">Duration: {movie.runtime ? `${movie.runtime} min` : 'N/A'}</p>
                            <p className="card-text">Popularity: {movie.popularity ? `${movie.popularity}` : 'N/A'}</p>
                            <p className="card-text">Budget: $ {movie.budget}</p>
                            <p className="card-text">Genre: { movie.genres ? movie.genres.map(item => <span key={item.id} className="badge badge-info">{item.name}</span>) : 'N/A' }</p>
                            <p className="card-text">Production companies: { movie.production_companies ? movie.production_companies.map(item => <span key={item.id} className="badge badge-light">{item.name}</span>) : 'N/A' }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
