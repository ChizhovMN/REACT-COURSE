import React from 'react';
import { FormProps } from 'types';
import CheckboxGroup from './CheckboxGroup';
import DateInput from './DateInput';
import ErrorMessage from './ErrorMessage';
import RadioGroup from './RadioGroup';
import Select from './Select';
import Submit from './Submit';
import TextInput from './TextInput';
import Uploader from './Uploader';

type FromProps = '';
type FormState = {
  textIsValid: boolean | null;
};
class Form extends React.Component<FormProps, FormState> {
  public textInput: React.RefObject<HTMLInputElement>;
  constructor(props: FormProps) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      textIsValid: null,
    };
  }
  componentDidMount(): void {
    console.log('component mouner');
  }

  onChangeText = () => console.log(this.textInput.current?.value);
  render(): React.ReactNode {
    const { textIsValid } = this.state;
    const validation = {
      textInput: {
        regExp: /^([A-Z]){1,}([a-z]){1,}[ ]{1}([A-Z]){1,}([a-z]){1,}[,]{1}[0-9]{1,}/g,
        wrongMsg: 'Write you text right! Example: "Name Surname,1" ',
      },
    };
    const checkValidation = (value: string, regExp: RegExp) => !!value.match(regExp);
    return (
      <>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            const textValue = this.textInput.current?.value;
            this.setState({
              textIsValid: textValue
                ? checkValidation(textValue, validation.textInput.regExp)
                : null,
            });
          }}
        >
          <TextInput passedRef={this.textInput}>
            {typeof textIsValid === 'boolean' && !textIsValid && (
              <ErrorMessage errorText={validation.textInput.wrongMsg} />
            )}
          </TextInput>
          {/* <DateInput />
          <Select />
          <CheckboxGroup />
          <RadioGroup />
          <Uploader /> */}
          <Submit />
        </form>
      </>
    );
  }
}

export default Form;
