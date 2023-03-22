import React from 'react';
import { InputProps } from 'types';
import { LABEL } from '../../helpers/const';
import FieldWrapper from '../FieldWrapper';
class TextInput extends React.Component<InputProps> {
  render(): React.ReactNode {
    return (
      <FieldWrapper label={LABEL.NAME_INPUT}>
        <input
          id={LABEL.NAME_INPUT.htmlFor}
          type={'text'}
          className="input-text input"
          placeholder="Type here your name and zip-code..."
          ref={this.props.passedRef}
          required
        />
        {this.props.children}
      </FieldWrapper>
    );
  }
}

export default TextInput;
