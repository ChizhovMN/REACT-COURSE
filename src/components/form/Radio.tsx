import React from 'react';
import { RadioProps } from 'types';

const Radio: React.FC<Partial<RadioProps>> = ({ brand, defaultCheck, register }) => {
  return (
    <div className="radio-field">
      <input
        type="radio"
        id={brand}
        value={brand}
        defaultChecked={defaultCheck}
        className={'radio'}
        {...register!('brand')}
      />
      <label htmlFor={brand} className="brand-label">
        {brand}
      </label>
    </div>
  );
};

export default Radio;
