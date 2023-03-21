import React from 'react';
import CheckboxGroup from './CheckboxGroup';
import DateInput from './DateInput';
import RadioGroup from './RadioGroup';
import Select from './Select';
import TextInput from './TextInput';
import Uploader from './Uploader';

class Form extends React.Component {
  render(): React.ReactNode {
    return (
      <form className="form">
        <TextInput />
        <DateInput />
        <Select />
        <CheckboxGroup />
        <RadioGroup />
        <Uploader />
      </form>
    );
  }
}

export default Form;
