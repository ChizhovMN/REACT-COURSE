import React from 'react';
import FieldWrapper from '../FieldWrapper';
import { SelectProps } from 'types';
import { LABEL, LIST_OF_COUNTRIES } from '../../helpers/const';

class Select extends React.Component<SelectProps> {
  render(): React.ReactNode {
    return (
      <FieldWrapper label={LABEL.SELECT_INPUT}>
        <select className="select" ref={this.props.passedRef} defaultValue={'default'}>
          <option disabled value={'default'}>
            SELECT COUNTRY
          </option>
          {LIST_OF_COUNTRIES.map((country) => (
            <option key={country.id} value={country.country}>
              {country.country}
            </option>
          ))}
        </select>
        {this.props.children}
      </FieldWrapper>
    );
  }
}

export default Select;
