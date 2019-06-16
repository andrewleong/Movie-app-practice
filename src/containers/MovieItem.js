import React, { Component } from 'react';

// Component imports
import MovieItemComponent from '../components/MovieItem';

// Container imports
import MovieDetails from './MovieDetails';

class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }
    }

    handleMovieClick = () => {
        this.setState({
            isModalOpen: true
        })
    }

    render() {
        const { movie } = this.props;
        const { isModalOpen } = this.state;
        return (
            <div key={movie.id} className="col-sm-12">

                <MovieDetails
                    movieDetails={movie}
                    showModal={isModalOpen}
                    toggleModal={this.handleToggleModal}
                />

                <MovieItemComponent
                    movie={movie}
                    onMovieClick={this.handleMovieClick}
                />
            </div>
        );
    }
}

export default MovieItem;
