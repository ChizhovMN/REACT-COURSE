import React from 'react';
import { InputProps } from 'types';
import { LABEL } from '../../helpers/const';
import Label from './Label';

class DateInput extends React.Component<InputProps> {
  render(): React.ReactNode {
    return (
      <div className="field">
        <Label
          htmlFor={LABEL.DATE_INPUTE.htmlFor}
          classNames={LABEL.DATE_INPUTE.classNames}
          labelText={LABEL.DATE_INPUTE.labelText}
        />
        <input
          id={LABEL.DATE_INPUTE.htmlFor}
          type={'date'}
          className="input-date input"
          ref={this.props.passedRef}
          required
        />
        {this.props.children}
      </div>
    );
  }
}

export default DateInput;
