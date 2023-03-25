import React from 'react';
import { FieldWrapperProps } from 'types';
import Label from './form/Label';

class FieldWrapper extends React.Component<FieldWrapperProps> {
  render(): React.ReactNode {
    const { classNames, labelText, htmlFor } = this.props.label;
    return (
      <div className="field">
        <Label htmlFor={htmlFor} classNames={classNames} labelText={labelText} />
        {this.props.children}
      </div>
    );
  }
}

export default FieldWrapper;
