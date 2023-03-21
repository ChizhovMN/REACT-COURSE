import React from 'react';

type ErrorMessageProps = {
  errorText: string;
};
class ErrorMessage extends React.Component<ErrorMessageProps> {
  render() {
    return <div className="error-message">{this.props.errorText}</div>;
  }
}

export default ErrorMessage;
