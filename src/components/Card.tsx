import React, { FunctionComponent } from 'react';
import { ResultData } from 'types';

const Card: FunctionComponent<Partial<ResultData>> = ({ name, image, location, type }) => (
  <div className="card-item">
    <div className="card-img">
      <div className="img-overflow">
        <img src={image} alt={name} className="img" loading="lazy" />
      </div>
      <div className="category">{name}</div>
    </div>
    <div className="info">
      <div>Name: {name}</div>
      <div>Location: {location!.name}</div>
      <div>Type: {type ? type : 'None'}</div>
    </div>
  </div>
);
export default Card;
