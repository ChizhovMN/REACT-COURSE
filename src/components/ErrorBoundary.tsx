import { Component, ErrorInfo, ReactNode } from 'react';
import { withRouter, WithRouterProps } from '../hocs/withRouter';

interface Props extends WithRouterProps {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}
//This is Error Boundary and in react it's realized only with class!
class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };
  static getDerivedStateFromError(): State {
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
