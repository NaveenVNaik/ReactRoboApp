import React from 'react';

const SearchBox = ({ searchChange }) => {
	return(
		<input 	className="f6 input-reset bn black-80 bg-white pa2 lh-solid br2-ns " 
				type="search" id="roboSearch" name="roboSearch" 
				placeholder="search robos..."
				onChange={searchChange} />
	);
}

export default SearchBox;