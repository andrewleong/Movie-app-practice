import React from 'react';

// Component imports
import MovieItem from './MovieItem';

const MovieList = ({ movieList=[] }) => {

    const generateList = (movies) => {
        if(movies.length){
            return movies.map( (item) => {
                return (
                    <div key={item.id}>
                        <MovieItem />
                    </div>
                )
            })
        }
    }

    return (
        <div className="col-xs-6 col-md-12">
            <div className="row">
                {generateList(movieList)}
            </div>
        </div>
    )
};

export default MovieList;
