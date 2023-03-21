import React, { Children } from 'react';

type TextInputProps = {
  passedRef: React.RefObject<HTMLInputElement>;
  children: React.ReactNode;
};

class TextInput extends React.Component<TextInputProps> {
  render(): React.ReactNode {
    console.log(this.props.passedRef.current?.value);
    return (
      <div className="field">
        <label className="label text-label" htmlFor="name">
          1.Write your name,surname and zip-code
        </label>
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
