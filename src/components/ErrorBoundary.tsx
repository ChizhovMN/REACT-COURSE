import React, { Component, ErrorInfo, ReactNode } from 'react';
import { withRouter, WithRouterProps } from '../reactHOC';

interface Props extends WithRouterProps {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };
  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      console.log('ERROR. YOU WAS REDIRECTED TO MAIN PAGE');
      this.props.navigate('/');
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
