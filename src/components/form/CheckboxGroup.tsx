import React from 'react';
import FieldWrapper from '../FieldWrapper';
import { LABEL } from '../../helpers/const';
import { InputProps } from 'types';

class CheckboxGroup extends React.Component<InputProps> {
  render(): React.ReactNode {
    return (
      <FieldWrapper label={LABEL.CHECKBOX}>
        <input
          type={'checkbox'}
          className="input-checkbox input"
          id={LABEL.CHECKBOX.htmlFor}
          ref={this.props.passedRef}
          required
        />
        {this.props.children}
      </FieldWrapper>
    );
  }
}

export default CheckboxGroup;
