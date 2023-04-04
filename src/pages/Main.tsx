import React, { FunctionComponent, Suspense, useEffect, useState } from 'react';
import { RickAndMortyApi } from 'types';
import Card from '../components/Card';
import LoadData from '../components/LoadData';
import ErrorBoundary from '../components/ErrorBoundary';

const lsKey = 'search-field';

const MainPage: FunctionComponent = () => {
  const [search, setSearch] = useState<string>(localStorage.getItem(lsKey) ?? '');
  const [data, setData] = useState<RickAndMortyApi>();
  const startLink = 'https://rickandmortyapi.com/api/character/';
  const getLocation = (link: string): Promise<RickAndMortyApi> =>
    fetch(link, { method: 'GET' })
      .then((data) => data.json())
      .catch((err) => console.log(err));
  useEffect(() => {
    getLocation(startLink).then((data) => {
      setData(data);
    });
  }, []);
  return (
    <>
      <div className="search-bar">
        <input type="search" placeholder="Type here..." className="search" />
        <div className="count">{data?.info.count}</div>
      </div>
      <div className="card-table">
        <Suspense fallback={<LoadData />}>
          {data?.results.map((item) => {
            const { name, location, type, image } = item;
            return <Card key={item.id} name={name} location={location} type={type} image={image} />;
          })}
        </Suspense>
      </div>
    </>
  );
};

export default MainPage;
