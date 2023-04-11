import React, { FunctionComponent } from 'react';
import { useGetCharacterQuery, useGetLocationQuery } from '../store/rickAndMorty';
import { ModalCardProps } from 'types';

const ModalCard: FunctionComponent<Partial<ModalCardProps>> = ({
  location,
  status,
  id,
  onClick,
}) => {
  const locationId = location?.url.split('/').reverse()[0];
  const className = status?.toLocaleLowerCase();
  const loadMsg = `Loading.....ooooops!`;
  const { data, isLoading } = useGetCharacterQuery(`${id}`);
  const { data: locationData } = useGetLocationQuery(locationId as string);
  return (
    <>
      {isLoading ? (
        loadMsg
      ) : (
        <div className="modal-card">
          <div className="cross" onClick={onClick}></div>
          <div className={`modal-status ${className}`}>{status}</div>
          <div className="modal-info">
            <p>Name: {data?.name}</p>
            <p>Gender: {data?.gender}</p>
            <p>Species: {data?.species}</p>
            <p>Origin: {data?.origin.name}</p>
            <p>Location: {data?.location.name}</p>
            <p>{`Location type:${locationData?.type}`}</p>
            <p>{`Dimension:${locationData?.dimension}`}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default ModalCard;
