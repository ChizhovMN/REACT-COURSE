import React from 'react';
import FieldWrapper from '../FieldWrapper';
import { LABEL } from '../../helpers/const';
import { InputProps } from 'types';

class Uploader extends React.Component<InputProps> {
  render(): React.ReactNode {
    return (
      <FieldWrapper label={LABEL.UPLOADER}>
        <input
          type={'file'}
          className="input-text input"
          ref={this.props.passedRef}
          accept="image/*"
        />
        {this.props.children}
      </FieldWrapper>
    );
  }
}

export default Uploader;
