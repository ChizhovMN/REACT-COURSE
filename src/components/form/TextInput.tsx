import React from 'react';
import { InputProps } from 'types';
import { LABEL } from '../../helpers/const';
import Label from './Label';
class TextInput extends React.Component<InputProps> {
  render(): React.ReactNode {
    return (
      <div className="field">
        <Label
          htmlFor={LABEL.NAME_INPUT.htmlFor}
          classNames={LABEL.NAME_INPUT.classNames}
          labelText={LABEL.NAME_INPUT.labelText}
        />
        <input
          id={LABEL.NAME_INPUT.htmlFor}
          type={'text'}
          className="input-text input"
          placeholder="Type here your name and zip-code..."
          ref={this.props.passedRef}
          required
        />
        {this.props.children}
      </div>
    );
  }
}

export default TextInput;
