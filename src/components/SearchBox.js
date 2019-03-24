import React from 'react';

const SearchBox = ({ searchChanged }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b-green bg-lightest-blue'
        type='search'
        aria-label='Search Robots'
        placeholder='search robots'
        onChange={searchChanged} />
    </div>
  );
}

export default SearchBox;