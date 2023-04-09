import React from 'react';
import FormCard from '../components/form/FormCard';
import Form from '../components/form/Form';
import '../styles/form.css';
import { useSelector } from 'react-redux';
import { getFormCards } from '../store/selectors';

const FormPage = () => {
  const formCards = useSelector(getFormCards);
  return (
    <div className="form-section">
      <Form />
      <div className="delivery-table">
        {formCards.map((card, index) => (
          <FormCard
            key={index}
            location={card.location}
            personalData={card.personalData}
            brand={card.brand}
            img={card.img}
            postIndex={card.postIndex}
            deliveryDate={card.deliveryDate}
          />
        ))}
      </div>
    </div>
  );
};
export default FormPage;
