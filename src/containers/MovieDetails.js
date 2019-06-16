import React, { Component } from 'react';

const API_SITE = process.env.REACT_APP_API_SITE;
const API_KEY = process.env.REACT_APP_API_KEY;
const API_IMAGE = process.env.REACT_APP_API_IMAGE;

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        }
    }

    componentDidMount(){
        fetch(`${API_SITE}movie/${this.props.movieDetails.id}?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((results) => {
            this.setState({
                movie: results
            })
        });
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
                            <h5 className="modal-title" id="exampleModalLabel">Release date: {movie.release_date}</h5>
                            <button type="button" className="close" data-dismiss="modal" onClick={this.props.toggleModal} aria-label="Close">
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
          </div>
        );
    }

}

export default MovieDetails;
