import React, { Component } from 'react';

// Container imports
import SearchBar from './SearchBar';

// Component imports
import MovieList from '../components/MovieList';


const API_SITE = process.env.REACT_APP_API_SITE;
const API_KEY = process.env.REACT_APP_API_KEY;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        }
    }

    handleSearch = (query) => {
        fetch(`${API_SITE}search/movie?api_key=${API_KEY}&query=${query}`)
        .then((response) => response.json())
        .then(({ results }) => {
            if(results.length) {
                this.setState({
                    movies: results
                })
            }
        });
    }

    render() {
        const { movies } = this.state;
        return (
            <div className="container">
                <SearchBar
                    onSearch={this.handleSearch}
                />

                {
                    movies.length === 0 ?
                        <h1>Please do a search.</h1> :
                        <MovieList
                            movieList={movies}
                        />
                }


            </div>
        );
    }
}


export default Home;
