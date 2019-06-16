import React, { Component } from 'react';

// Component imports
import SearchBarComponent from '../components/SearchBarComponent';


class SearchBar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }

    render() {
        return (
            <SearchBarComponent />
        );
    }
}

export default SearchBar;
