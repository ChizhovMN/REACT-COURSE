import Card from '../components/Card';
import React, { SetStateAction } from 'react';
import { MainPropsType, ProductsType } from 'types';

class MainPage extends React.Component<MainPropsType> {
  render(): React.ReactNode {
    const storageSearchValue = localStorage.getItem('search-field');
    return (
      <>
        <div className="search-bar">
          <input
            type="search"
            placeholder="Type here..."
            className="search"
            defaultValue={storageSearchValue ? storageSearchValue : ''}
            onChange={(event) => {
              console.log(event.target.value);
              setTimeout(() => this.props.onChangeSearch(event.target.value), 500);
            }}
          />
        </div>
        <div className="card-table">
          {this.props.products.length > 0 ? (
            this.props.products.map((card) => <Card key={card.id} {...card} />)
          ) : (
            <div className="products-not-found">PRODUCTS NOT FOUND!</div>
          )}
        </div>
      </>
    );
  }
}

export default MainPage;
