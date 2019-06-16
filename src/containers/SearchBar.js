import React, { Component } from 'react';

// Component imports
import SearchBarComponent from '../components/SearchBarComponent';


class SearchBar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            query: "",
        }
    }

    handleQueryChange = ({ target }) => {
        const { value } = target;

        this.setState({
            query: value,
        })

    }

    render() {
        return (
            <SearchBarComponent
                onQueryChange={this.handleQueryChange}
            />
        );
    }
}

export default SearchBar;
