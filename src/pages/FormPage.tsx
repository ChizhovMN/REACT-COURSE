import React from 'react';
import { FormCardType } from 'types';
import FormCard from '../components/form/FormCard';
import Form from '../components/form/Form';
import '../styles/form.css';
type FormPageProps = { props?: '' };
type FormPageState = {
  cards: FormCardType[];
};
class FormPage extends React.Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);
    this.state = {
      cards: [],
    };
  }
  hanldeAddCard = (card: FormCardType) =>
    this.setState((prevState) => ({ ...prevState, cards: [...prevState.cards, card] }));
  render(): React.ReactNode {
    const { cards } = this.state;
    return (
      <div className="form-section">
        <Form handleAddCard={this.hanldeAddCard} />
        <div className="delivery-table">
          {cards.map((card, index) => (
            <FormCard
              // don't do it on real project. It's a bad practise use index as key
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
  }
}

export default FormPage;
