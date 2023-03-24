import React from 'react';
import { FormCardProps } from 'types';

class FormCard extends React.Component<FormCardProps> {
  render(): React.ReactNode {
    return (
      <div className="delivery-card">
        <h2 className="delivery-header">PURCHASE</h2>
        <img src={this.props.img} alt="delivery-img" />
        <div className="name">Your name,surname: {this.props.personalData}</div>
        <div className="post">Your post index: {this.props.postIndex}</div>
        <div className="location">Your location {this.props.location}</div>
        <div className="brand">Your brand: {this.props.brand}</div>
        <div className="delivery-date">Delivery Date: {this.props.deliveryDate}</div>
      </div>
    );
  }
}

export default FormCard;
