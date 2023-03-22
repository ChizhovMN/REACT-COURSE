import React from 'react';
import { InputProps } from 'types';
import { LABEL } from '../../helpers/const';
import FieldWrapper from '../FieldWrapper';

class DateInput extends React.Component<InputProps> {
  render(): React.ReactNode {
    return (
      <FieldWrapper label={LABEL.DATE_INPUTE}>
        <input
          id={LABEL.DATE_INPUTE.htmlFor}
          type={'date'}
          className="input-date input"
          ref={this.props.passedRef}
          required
        />
        {this.props.children}
      </FieldWrapper>
    );
  }
}

export default DateInput;
