import React from 'react';
import { LabelProps } from 'types';

class Label extends React.Component<LabelProps> {
  render(): React.ReactNode {
    const { classNames, labelText, htmlFor } = this.props;
    return (
      <label className={`label ${classNames.join(' ')}`} htmlFor={htmlFor}>
        {labelText}
      </label>
    );
  }
}

export default Label;
