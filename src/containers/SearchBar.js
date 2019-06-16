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

    handleSearch = () => {
        const { query } = this.state;
        const { onSearch } = this.props;
        if(onSearch) onSearch(query);
    }

    render() {
        return (
            <SearchBarComponent
                onQueryChange={this.handleQueryChange}
                onSearch={this.handleSearch}
            />
        );
    }
}

export default SearchBar;
