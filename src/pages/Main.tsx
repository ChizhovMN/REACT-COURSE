import React, { FunctionComponent } from 'react';
import { MainPropsType } from 'types';
import Card from '../components/Card';

const MainPage: FunctionComponent<MainPropsType> = ({ onChangeSearch, products, search }) => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    onChangeSearch(event.target.value);
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
        {products.length > 0 ? (
          products.map((card) => <Card key={card.id} {...card} />)
        ) : (
          <div className="products-not-found">PRODUCTS NOT FOUND!</div>
        )}
      </div>
    </>
  );
};

export default MainPage;
