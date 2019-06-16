import React from 'react';

const SearchBarComponent = ({ onQueryChange }) => {
    return (
        <div>
            <input onChange={onQueryChange} type="text" placeholder="Search Movies" />
        </div>
    );
};

export default SearchBarComponent;
