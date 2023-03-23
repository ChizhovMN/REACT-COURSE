import React from 'react';
import { VALIDATION } from '../../helpers/validation';
import {
  checkCheckbox,
  checkDateValidation,
  checkSelectValidation,
  checkTextValidation,
  getActiveRadio,
} from '../../helpers/helper';
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
  selectIsValid: boolean | null;
  checkboxIsCheck: boolean | null;
};
class Form extends React.Component<FormProps, FormState> {
  public textInput: React.RefObject<HTMLInputElement>;
  public dateInput: React.RefObject<HTMLInputElement>;
  public selectOptions: React.RefObject<HTMLSelectElement>;
  public checkboxInput: React.RefObject<HTMLInputElement>;
  public samsungRef: React.RefObject<HTMLInputElement>;
  public appleRef: React.RefObject<HTMLInputElement>;
  public huaweiRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.textInput = React.createRef();
    this.dateInput = React.createRef();
    this.selectOptions = React.createRef();
    this.checkboxInput = React.createRef();
    this.samsungRef = React.createRef();
    this.appleRef = React.createRef();
    this.huaweiRef = React.createRef();

    this.state = {
      textIsValid: null,
      dateIsValid: null,
      selectIsValid: null,
      checkboxIsCheck: null,
    };
  }
  render(): React.ReactNode {
    const { textIsValid, dateIsValid, selectIsValid, checkboxIsCheck } = this.state;
    // console.log('VALUE', getActiveRadio([this.samsungRef, this.appleRef, this.huaweiRef]));
    return (
      <>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            const textValue = this.textInput.current?.value;
            const dateInput = this.dateInput.current?.value;
            const selectValue = this.selectOptions.current?.value;
            const checkbox = this.checkboxInput.current?.checked;
            checkDateValidation(dateInput);
            this.setState((prevState) => ({
              ...prevState,
              textIsValid: textValue
                ? checkTextValidation(textValue, VALIDATION.NAME_INPUT.regExp)
                : null,
              dateIsValid: dateInput ? checkDateValidation(dateInput) : null,
              selectIsValid: selectValue ? checkSelectValidation(selectValue) : null,
              checkboxIsCheck: checkbox ? checkCheckbox(checkbox) : null,
            }));
          }}
        >
          <TextInput passedRef={this.textInput}>
            {typeof textIsValid === 'boolean' && !textIsValid && (
              <ErrorMessage errorText={VALIDATION.NAME_INPUT.error} />
            )}
          </TextInput>
          <Select passedRef={this.selectOptions}>
            {typeof selectIsValid === 'boolean' && !selectIsValid && (
              <ErrorMessage errorText={VALIDATION.NAME_INPUT.error} />
            )}
          </Select>
          <RadioGroup
            appleRef={this.appleRef}
            samsungRef={this.samsungRef}
            huaweiRef={this.huaweiRef}
          />
          <DateInput passedRef={this.dateInput}>
            {typeof dateIsValid === 'boolean' && !dateIsValid && (
              <ErrorMessage errorText={VALIDATION.DATE_INPUT.error} />
            )}
          </DateInput>
          <CheckboxGroup passedRef={this.checkboxInput}>
            {typeof checkboxIsCheck === 'boolean' && !checkboxIsCheck && (
              <ErrorMessage errorText={VALIDATION.CHECKBOX.error} />
            )}
          </CheckboxGroup>
          {/* <Uploader /> */}
          <Submit />
        </form>
      </>
    );
  }
}

export default Form;
