import React from 'react';
import { RadioProps } from 'types';

class Radio extends React.Component<RadioProps> {
  render(): React.ReactNode {
    const { passedRef, brand, defaultCheck } = this.props;
    return (
      <div className="radio-field">
        <input
          type="radio"
          id={brand}
          name={'brand'}
          value={brand}
          defaultChecked={defaultCheck}
          ref={passedRef}
          className={'radio'}
        />
        <label htmlFor={brand} className="brand-label">
          {brand}
        </label>
      </div>
    );
  }
}

export default Radio;
