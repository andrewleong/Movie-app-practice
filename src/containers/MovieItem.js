import React, { Component } from 'react';

import MovieItemComponent from '../components/MovieItem';

class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        const { movie } = this.props;
        return (
            <div key={movie.id} className="col-sm-12">
                <MovieItemComponent
                    movie={movie}
                    onMovieClick={this.handleMovieClick}
                />
            </div>
        );
    }
}

export default MovieItem;
