import React, { FunctionComponent, useState } from 'react';
import { ResultData } from 'types';
import ModalCard from './ModalCard';
import LoadData from './LoadData';

const Card: FunctionComponent<Partial<ResultData>> = ({ name, image, location, type, id }) => {
  const [cardInfo, setCardInfo] = useState<ResultData>();
  const [show, setShow] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const getCardData = (): Promise<ResultData> => {
    setLoading(true);
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((data) => {
        setLoading(false);
        return data.json();
      })
      .catch((err) => console.log(err));
  };
  const handleCardInfo = () => {
    if (!cardInfo) getCardData().then((data) => setCardInfo(data));
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
          <div className={`category ${show ? 'hide' : ''}`}>{name}</div>
        </div>

        <div className={`info ${show ? 'hide' : ''}`}>
          <div>Name: {name}</div>
          <div>Location: {location!.name}</div>
          <div>Type: {type ? type : 'None'}</div>
        </div>
        {isLoading && (
          <div className="alert">
            <LoadData />
          </div>
        )}
      </div>
      {show && cardInfo && <ModalCard {...cardInfo} onClick={handleCloseModal} />}
    </div>
  );
};
export default Card;
