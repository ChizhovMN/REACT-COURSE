import React from 'react';

class Page404 extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="error-page">
        <p className="error-header">404 page</p>
        <p className="error-subheader">Oops! Not found!</p>
      </div>
    );
  }
}

export default Page404;
