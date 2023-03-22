import React from 'react';
import { VALIDATION } from '../../helpers/validation';
import { checkDateValidation, checkTextValidation } from '../../helpers/helper';
import CheckboxGroup from './CheckboxGroup';
import DateInput from './DateInput';
import ErrorMessage from './ErrorMessage';
import RadioGroup from './RadioGroup';
import Select from './Select';
import Submit from './Submit';
import TextInput from './TextInput';
import Uploader from './Uploader';

type FormProps = '';
type FormState = {
  textIsValid: boolean | null;
  dateIsValid: boolean | null;
};
class Form extends React.Component<FormProps, FormState> {
  public textInput: React.RefObject<HTMLInputElement>;
  public dateInput: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.textInput = React.createRef();
    this.dateInput = React.createRef();
    this.state = {
      textIsValid: null,
      dateIsValid: null,
    };
  }
  componentDidMount(): void {
    console.log('component mouner');
  }

  onChangeText = () => console.log(this.textInput.current?.value);
  render(): React.ReactNode {
    const { textIsValid, dateIsValid } = this.state;
    return (
      <>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            const textValue = this.textInput.current?.value;
            const dateInput = this.dateInput.current?.value;
            checkDateValidation(dateInput);
            this.setState((prevState) => ({
              ...prevState,
              textIsValid: textValue
                ? checkTextValidation(textValue, VALIDATION.NAME_INPUT.regExp)
                : null,
              dateIsValid: dateInput ? checkDateValidation(dateInput) : null,
            }));
          }}
        >
          <TextInput passedRef={this.textInput}>
            {typeof textIsValid === 'boolean' && !textIsValid && (
              <ErrorMessage errorText={VALIDATION.NAME_INPUT.error} />
            )}
          </TextInput>
          <DateInput passedRef={this.dateInput}>
            {typeof dateIsValid === 'boolean' && !dateIsValid && (
              <ErrorMessage errorText={VALIDATION.DATE_INPUT.error} />
            )}
          </DateInput>
          {/* <Select /> */}
          {/* <CheckboxGroup /> */}
          {/* <RadioGroup /> */}
          {/* <Uploader /> */}
          <Submit />
        </form>
      </>
    );
  }
}

export default Form;
