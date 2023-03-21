import React from 'react';
import Form from '../components/form/Form';
import '../styles/form.css';

class FormPage extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="form-section">
        <Form />
      </div>
    );
  }
}

export default FormPage;
