import React, { FunctionComponent, Suspense, useEffect, useState } from 'react';
import { RickAndMortyApi } from 'types';
import LoadData from '../components/LoadData';
import ErrorBoundary from '../components/ErrorBoundary';
import MainTable from '../components/MainTable';
import { useLocation } from 'react-router-dom';
import Search from '../components/Search';

const lsKey = 'search-field';

const MainPage: FunctionComponent = () => {
  const location = useLocation();
  const [search, setSearch] = useState<string>(localStorage.getItem(lsKey) ?? '');
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<RickAndMortyApi>();
  const searchLink = !!search ? `&name=${search}` : '';
  const startLink = `https://rickandmortyapi.com/api/character/?pages=${page}${searchLink}`;

  const getData = (link: string): Promise<RickAndMortyApi> => {
    return fetch(link, { method: 'GET' })
      .then((data) => data.json())
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData(startLink).then((data) => {
      console.log('data', data);
      setData(data);
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
  const characters = data ? data?.info!.count : 0;
  const allPages = data ? data?.info!.pages : 0;
  return (
    <>
      <div className="search-bar">
        <div className="searchbar-info">
          <div className="count">All characters: {characters}</div>
          <div className="pages">All pages: {allPages}</div>
        </div>
        <Search handleSearch={handleSearch} search={search} />
      </div>
      <div className="card-table">
        <ErrorBoundary>
          <Suspense fallback={<LoadData />}>
            {!!data?.results ? <MainTable {...data} /> : <div>NOT FOUND</div>}
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className="btn-group">
        <button disabled={checkNull(data?.info!.prev)} onClick={() => changePage(data?.info.prev)}>
          Prev Page
        </button>
        <button disabled={checkNull(data?.info!.next)} onClick={() => changePage(data?.info.next)}>
          Next Page
        </button>
      </div>
    </>
  );
};

export default MainPage;
