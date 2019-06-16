import React from 'react';

const SearchBarComponent = ({ onQueryChange, onSearch }) => {
    return (
        <div>
            <input id="search-bar" onChange={onQueryChange} type="text" placeholder="Search Movies" />
            <button type="button" onClick={onSearch} className="btn btn-primary">Search</button>
        </div>
    );
};

export default SearchBarComponent;
