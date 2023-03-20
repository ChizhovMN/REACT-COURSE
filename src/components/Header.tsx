import React from 'react';
import { withRouter, WithRouterProps } from '../hocs/withRouter';
import HeaderNav from './HeaderNav';

class Header extends React.Component<WithRouterProps> {
  render(): React.ReactNode {
    return (
      <header className="header">
        <HeaderNav />
        <div>Current Page:{this.props.location.pathname}</div>
      </header>
    );
  }
}

export default withRouter(Header);
