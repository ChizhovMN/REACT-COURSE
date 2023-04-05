import React, { FunctionComponent, useState } from 'react';
import { SearchProps } from 'types';

const Search: FunctionComponent<SearchProps> = ({ handleSearch, search }) => {
  const [searchbar, setSearchbar] = useState<string>(search);
  return (
    <input
      type="search"
      placeholder="Write Person name..."
      value={searchbar}
      className="search"
      onChange={(e) => {
        setSearchbar(e.target.value);
      }}
      onKeyDown={(e) => {
        const key = e.key;
        if (key === 'Enter') {
          localStorage.setItem('SEARCH_BAR', searchbar);
          handleSearch(searchbar);
        }
      }}
    />
  );
};

export default Search;
