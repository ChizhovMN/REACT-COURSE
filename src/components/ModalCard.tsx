import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { LocationApi, ModalCardProps } from 'types';

const ModalCard: FunctionComponent<Partial<ModalCardProps>> = ({
  name,
  origin,
  status,
  species,
  gender,
  location,
  onClick,
}) => {
  const className = status?.toLocaleLowerCase();
  const [data, setData] = useState<LocationApi>();
  const loadMsg = `Loading.....ooooops!`;
  const getLocation = useCallback(
    (): Promise<LocationApi> =>
      fetch(location?.url as string)
        .then((data) => data.json())
        .catch((err) => console.log(err)),
    [location?.url]
  );
  useEffect(() => {
    getLocation().then((data) => setData(data));
  }, [getLocation]);
  return (
    <div className="modal-card">
      <div className="cross" onClick={onClick}></div>
      <div className={`modal-status ${className}`}>{status}</div>
      <div className="modal-info">
        <p>Name: {name}</p>
        <p>Gender: {gender}</p>
        <p>Species: {species}</p>
        <p>Origin: {origin?.name}</p>
        <p>Location: {location?.name}</p>
        <p>{data ? `Location type:${data?.type}` : loadMsg}</p>
        <p>{data ? `Dimension:${data?.dimension}` : loadMsg}</p>
      </div>
    </div>
  );
};
export default ModalCard;
