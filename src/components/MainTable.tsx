import React, { FunctionComponent } from 'react';
import { RickAndMortyApi } from 'types';
import Card from './Card';
import LoadData from './LoadData';

const MainTable: FunctionComponent<Partial<RickAndMortyApi>> = ({ results }) => {
  return !!results ? (
    <>
      {results.map((data) => (
        <Card key={data.id} {...data} />
      ))}
    </>
  ) : (
    <LoadData />
  );
};

export default MainTable;
