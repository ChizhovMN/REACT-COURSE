import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { CardType, MainPropsType } from 'types';
import Card from '../components/Card';

const lsKey = 'search-field';

const MainPage: FunctionComponent<MainPropsType> = ({ products }) => {
  const [search, setSearch] = useState<string>(localStorage.getItem(lsKey) ?? '');

  useEffect(() => {
    setSearch(localStorage.getItem(lsKey) ?? '');
    return () => {
      localStorage.setItem(lsKey, search);
    };
  }, []);

  const cards =
    search.length > 0
      ? products.filter((item: CardType) =>
          (['brand', 'title', 'category'] as const).some((card) =>
            item[card].toLowerCase().includes(search.toLowerCase())
          )
        )
      : products;
  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) =>
      setSearch(() => {
        localStorage.setItem(lsKey, event.target.value);
        return event.target.value;
      }),
    []
  );
  return (
    <>
      <div className="search-bar">
        <input
          type="search"
          placeholder="Type here..."
          className="search"
          value={search}
          onChange={onChange}
        />
      </div>

      <div className="card-table">
        {cards.length > 0 ? (
          cards.map((card) => <Card key={card.id} {...card} />)
        ) : (
          <div className="products-not-found">PRODUCTS NOT FOUND!</div>
        )}
      </div>
    </>
  );
};

export default MainPage;
