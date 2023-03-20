import React from 'react';
import { MainPropsType } from 'types';
import Card from '../components/Card';

class MainPage extends React.Component<MainPropsType> {
  onChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    this.props.onChangeSearch(event.target.value);
  render(): React.ReactNode {
    return (
      <>
        <div className="search-bar">
          <input
            type="search"
            placeholder="Type here..."
            className="search"
            value={this.props.search}
            onChange={this.onChange}
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
