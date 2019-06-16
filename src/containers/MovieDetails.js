import React, { Component } from 'react';

import MovieDetailsComponent from '../components/MovieDetails';

const API_SITE = process.env.REACT_APP_API_SITE;
const API_KEY = process.env.REACT_APP_API_KEY;

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
                onClick={this.hideModal} className={`modal fade ${this.props.showModal ? 'show' : ''}`}
                style={{ display: `${this.props.showModal ? 'block' : 'none'}` }}
                tabIndex="-1" role="dialog" aria-hidden="true"
            >
                <MovieDetailsComponent movie={movie} toggleModal={this.props.toggleModal} />
          </div>
        );
    }

}

export default MovieDetails;
