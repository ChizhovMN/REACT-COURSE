// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LocationApi, ResultData, RickAndMortyApi } from 'types';

// Define a service using a base URL and expected endpoints
export const rickAndMorty = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<RickAndMortyApi, [string, string]>({
      query: ([page, search]) => `character/?page=${page}${!!search ? `&name=${search}` : ''}`,
    }),
    getCharacter: builder.query<ResultData, string>({
      query: (id) => `character/${id}`,
    }),
    getLocation: builder.query<LocationApi, string>({
      query: (id) => `location/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCharacterQuery, useGetCharactersQuery, useGetLocationQuery } = rickAndMorty;
