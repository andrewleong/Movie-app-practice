import React from 'react';

const SearchBarComponent = ({ onQueryChange }) => {
    return (
        <div>
            <input id="search-bar" onChange={onQueryChange} type="text" placeholder="Search Movies" />
        </div>
    );
};

export default SearchBarComponent;
