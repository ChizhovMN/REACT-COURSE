import React, { FunctionComponent, Suspense, useEffect, useState } from 'react';
import LoadData from '../components/LoadData';
import ErrorBoundary from '../components/ErrorBoundary';
import MainTable from '../components/MainTable';
import Search from '../components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { changePageValue } from '../store/actions';
import { getPageValue, getSearchFieldValue } from '../store/selectors';
import { useGetCharactersQuery } from '../store/rickAndMorty';
import { useSearchParams } from 'react-router-dom';

const MainPage: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isBrowser, setIsBrowser] = useState(false);
  const search = useSelector(getSearchFieldValue);
  const pages = useSelector(getPageValue);
  const { data, error } = useGetCharactersQuery([pages, search]);

  const changePage = (direction: 'next' | 'prev') => {
    if (data?.info[direction]) {
      const pages = data.info[direction].split('?')[1].split('&')[0].split('=')[1];
      dispatch(changePageValue(pages));
    }
  };
  useEffect(() => setIsBrowser(true), [setIsBrowser]);
  useEffect(() => {
    if (error) {
      dispatch(changePageValue('1'));
    }
  }, [dispatch, search, error]);
  useEffect(() => {
    searchParams.set('pages', pages);
    if (search.length > 0) {
      searchParams.set('search', search);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
  }, [pages, setSearchParams, search, searchParams]);
  return (
    <>
      {isBrowser ? (
        <>
          <div className="search-bar">
            <div className="searchbar-info">
              <div className="count">All characters: {error ? 0 : data?.info.count}</div>
              <div className="pages">All pages: {error ? 0 : data?.info.pages}</div>
            </div>
            <Search />
          </div>
          <div className="card-table">
            <ErrorBoundary>
              <Suspense fallback={<LoadData />}>
                {!error ? <MainTable {...data} /> : <div>NOT FOUND</div>}
              </Suspense>
            </ErrorBoundary>
          </div>
          <div className="btn-group">
            <button disabled={data?.info.prev ? false : true} onClick={() => changePage('prev')}>
              Prev Page
            </button>
            <button disabled={data?.info.next ? false : true} onClick={() => changePage('next')}>
              Next Page
            </button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default MainPage;
