import React, { FunctionComponent, Suspense, useEffect, useState } from 'react';
import { RickAndMortyApi } from 'types';
import LoadData from '../components/LoadData';
import ErrorBoundary from '../components/ErrorBoundary';
import MainTable from '../components/MainTable';
import Search from '../components/Search';

const lsKey = 'SEARCH_BAR';

const MainPage: FunctionComponent = () => {
  const [search, setSearch] = useState<string>(localStorage.getItem(lsKey) ?? '');
  const [data, setData] = useState<RickAndMortyApi>();
  const [fetchError, setFetchError] = useState<boolean>(false);
  const searchLink = !!search ? `&name=${search}` : '';
  const startLink = `https://rickandmortyapi.com/api/character/?pages=1${searchLink}`;

  const getData = (link: string): Promise<RickAndMortyApi> => {
    return fetch(link, { method: 'GET' })
      .then((data) => data.json())
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData(startLink).then((data) => {
      if (data.info && data.results) {
        setData(data);
        setFetchError(false);
      } else {
        setFetchError(true);
      }
    });
  }, [startLink]);
  const handleSearch = (search: string) => {
    setSearch(search);
    getData(startLink);
  };
  const checkNull = (check: string | undefined) => check === null;
  const changePage = (link: string | undefined) => {
    if (!!link) {
      getData(link).then((data) => setData(data));
    }
  };
  const checkDisableBtn = (direction: 'prev' | 'next') =>
    !fetchError ? checkNull(data?.info![direction]) : true;
  const checkInfo = (info: 'count' | 'pages') => (!fetchError ? data?.info![info] : 0);
  return (
    <>
      <div className="search-bar">
        <div className="searchbar-info">
          <div className="count">All characters: {checkInfo('count')}</div>
          <div className="pages">All pages: {checkInfo('pages')}</div>
        </div>
        <Search handleSearch={handleSearch} search={search} />
      </div>
      <div className="card-table">
        <ErrorBoundary>
          <Suspense fallback={<LoadData />}>
            {!fetchError ? <MainTable {...data} /> : <div>NOT FOUND</div>}
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className="btn-group">
        <button disabled={checkDisableBtn('prev')} onClick={() => changePage(data?.info.prev)}>
          Prev Page
        </button>
        <button disabled={checkDisableBtn('next')} onClick={() => changePage(data?.info.next)}>
          Next Page
        </button>
      </div>
    </>
  );
};

export default MainPage;
