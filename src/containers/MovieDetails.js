import React, { Component } from 'react';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        }
    }

    render() {
        const { movie } = this.state;
        return (
            <div
            onClick={this.hideModal} className={`modal fade movie-modal ${this.props.showModal ? 'show' : ''}`}
            style={{
                display: `${this.props.showModal ? 'block' : 'none'}`,
                backgroundColor: 'rgba(0,0,0,.8)'
            }}
            id="movie-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
            >

                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Releases on {movie.release_date}</h5>
                            <button type="button" className="close" data-dismiss="modal" onClick={this.props.toggleModal} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="card">
                                <div className="card-img-overlay white">
                                    <h3 className="card-title">{movie.title ? movie.title : 'N/A'}</h3>
                                    <h4 className="card-subtitle"><span style={{color:"#fbb829"}}>IMDB</span> ratings: {movie.vote_average}</h4>
                                    <p className="card-text">{movie.overview ? movie.overview : 'N/A'}</p>
                                    <p className="card-text">Duration: {movie.runtime ? `${movie.runtime} min` : 'N/A'}</p>
                                    <p className="card-text">Popularity: {movie.popularity ? `${movie.popularity}` : 'N/A'}</p>
                                    <p className="card-text">Budget: $ {movie.budget}</p>
                                    <p className="card-text">Genre: { movie.genres ? movie.genres.map(item => <span className="badge badge-info">{item.name}</span>) : 'N/A' }</p>
                                    <p className="card-text">Production companies: { movie.production_companies ? movie.production_companies.map(item => <span className="badge badge-light">{item.name}</span>) : 'N/A' }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        );
    }

}

export default MovieDetails;
