import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddSearchFieldValue } from '../store/actions';
import { getSearchFieldValue } from '../store/selectors';

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector(getSearchFieldValue);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <input
      type="search"
      placeholder="Write Person name..."
      defaultValue={search}
      className="search"
      ref={inputRef}
      onKeyDown={(e) => {
        const key = e.key;
        if (key === 'Enter') {
          dispatch(AddSearchFieldValue(inputRef.current?.value as string));
        }
      }}
    />
  );
};

export default Search;
