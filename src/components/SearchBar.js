import React from 'react';

const SearchBarComponent = ({ onQueryChange, onSearch, disabled }) => {
    return (
        <div className="search-bar">
            <input id="search-bar" onChange={onQueryChange} type="text" placeholder="Search Movies" />
            <button type="button" disabled={disabled} onClick={onSearch} className="btn btn-primary">Search</button>
        </div>
    );
};

export default SearchBarComponent;
