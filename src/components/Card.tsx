import React, { FunctionComponent } from 'react';
import { CardType } from 'types';

const Card: FunctionComponent<Partial<CardType>> = ({
  thumbnail,
  brand,
  category,
  title,
  stock,
  rating,
  discountPercentage,
  price,
}) => (
  <div className="card-item">
    <div className="card-img">
      <div className="img-overflow">
        <img src={thumbnail} alt={brand} className="img" loading="lazy" />
      </div>
      <div className="category">{category}</div>
      <div className="brand">{brand}</div>
      <div className="tittle">{title}</div>
      <div className="stock">Stock:{stock}</div>
    </div>
    <div className="info">
      <div>Rating:{rating}</div>
      <div>Discount:{discountPercentage}</div>
      <div>Price:{price}</div>
    </div>
  </div>
);
export default Card;
