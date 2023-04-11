import React, { FunctionComponent, useState } from 'react';
import { ResultData } from 'types';
import ModalCard from './ModalCard';

const Card: FunctionComponent<Partial<ResultData>> = ({
  status,
  name,
  image,
  location,
  type,
  id,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const handleCardInfo = () => {
    setShow(true);
  };
  const handleCloseModal = () => setShow(false);
  return (
    <div className="card-wrapper">
      <div className="card-item" id={'' + id} onClick={handleCardInfo}>
        <div className="card-img">
          <div className="img-overflow">
            <img src={image} alt={name} className="img" loading="lazy" />
          </div>
          <div className={`category ${show ? 'hide' : ''}`}>{name ? name : ''}</div>
        </div>

        <div className={`info ${show ? 'hide' : ''}`}>
          <div>Name: {name}</div>
          <div>Location: {location!.name}</div>
          <div>Type: {type ? type : 'None'}</div>
        </div>
      </div>
      {show && <ModalCard id={id} status={status} location={location} onClick={handleCloseModal} />}
    </div>
  );
};
export default Card;
