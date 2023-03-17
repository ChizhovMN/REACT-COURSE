import Card from '../components/Card';
import React from 'react';
import { ProductsType } from 'types';

class MainPage extends React.Component<ProductsType> {
  render(): React.ReactNode {
    return (
      <>
        <div className="search-bar">
          <input type="search" placeholder="Type here..." className="search" />
        </div>
        <div className="card-table">
          {this.props.products.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </>
    );
  }
}

export default MainPage;
