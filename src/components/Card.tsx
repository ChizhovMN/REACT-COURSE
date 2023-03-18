import React from 'react';
import { CardType } from 'types';

class Card extends React.Component<CardType> {
  render(): React.ReactNode {
    return (
      <div className="card-item">
        <div className="card-img">
          <div className="img-overflow">
            <img src={this.props.thumbnail} alt={this.props.brand} className="img" loading="lazy" />
          </div>
          <div className="category">{this.props.category}</div>
          <div className="brand">{this.props.brand}</div>
          <div className="tittle">{this.props.title}</div>
          <div className="stock">Stock:{this.props.stock}</div>
        </div>
        <div className="info">
          <div>Rating:{this.props.rating}</div>
          <div>Discount:{this.props.discountPercentage}</div>
          <div>Price:{this.props.price}</div>
        </div>
      </div>
    );
  }
}

export default Card;
