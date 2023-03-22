import React from 'react';
import { InputProps, LabelProps } from 'types';
import Label from './Label';
class TextInput extends React.Component<InputProps> {
  render(): React.ReactNode {
    console.log(this.props.passedRef.current?.value);
    const label: LabelProps = {
      htmlFor: 'name',
      classNames: ['text-label'],
      labelText: '1.Write your name,surname and zip-code',
    };
    return (
      <div className="field">
        <Label htmlFor={label.htmlFor} classNames={label.classNames} labelText={label.labelText} />
        <input
          id="name"
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
