import React, { Component } from 'react';

// Component imports
import SearchBarComponent from '../components/SearchBarComponent';


class SearchBar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            query: "",
            disabled: true,
        }
    }

    handleQueryChange = ({ target }) => {
        const { value } = target;

        this.setState({
            query: value,
            disabled: true
        })

        if(value) {
            this.setState({
                disabled: false
            })
        }

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
                disabled={this.state.disabled}
            />
        );
    }
}

export default SearchBar;
