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
import { FormCardType } from 'types';

type FormProps = {
  handleAddCard: (card: FormCardType) => void;
};
type FormState = {
  textIsValid: boolean | null;
  dateIsValid: boolean | null;
  selectIsValid: boolean | null;
  checkboxIsCheck: boolean | null;
  uploaderisValid: boolean | null;
  showAccept: boolean;
};
class Form extends React.Component<FormProps, FormState> {
  public textInput: React.RefObject<HTMLInputElement>;
  public dateInput: React.RefObject<HTMLInputElement>;
  public selectOptions: React.RefObject<HTMLSelectElement>;
  public checkboxInput: React.RefObject<HTMLInputElement>;
  public samsungRef: React.RefObject<HTMLInputElement>;
  public appleRef: React.RefObject<HTMLInputElement>;
  public huaweiRef: React.RefObject<HTMLInputElement>;
  public uploaderRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.textInput = React.createRef();
    this.dateInput = React.createRef();
    this.selectOptions = React.createRef();
    this.checkboxInput = React.createRef();
    this.samsungRef = React.createRef();
    this.appleRef = React.createRef();
    this.huaweiRef = React.createRef();
    this.uploaderRef = React.createRef();

    this.state = {
      textIsValid: null,
      dateIsValid: null,
      selectIsValid: null,
      checkboxIsCheck: null,
      uploaderisValid: null,
      showAccept: false,
    };
  }
  render(): React.ReactNode {
    const {
      textIsValid,
      dateIsValid,
      selectIsValid,
      checkboxIsCheck,
      uploaderisValid,
      showAccept,
    } = this.state;
    const { handleAddCard } = this.props;
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
            const uploader = this.uploaderRef.current?.files?.length;
            checkDateValidation(dateInput);
            this.setState(
              (prevState) => ({
                ...prevState,
                textIsValid: textValue
                  ? checkTextValidation(textValue, VALIDATION.NAME_INPUT.regExp)
                  : null,
                dateIsValid: dateInput ? checkDateValidation(dateInput) : null,
                selectIsValid: selectValue ? checkSelectValidation(selectValue) : null,
                checkboxIsCheck: checkbox ? checkCheckbox(checkbox) : null,
                uploaderisValid: typeof uploader === 'number' ? !!uploader : null,
              }),
              () => {
                if (this.handleFormValidation()) {
                  const [personalData, postIndex] = textValue?.split(',') ?? '';
                  const file = this.uploaderRef.current?.files as FileList;
                  const img = URL.createObjectURL(file[0]);
                  this.setState({ showAccept: true });
                  handleAddCard({
                    img: img,
                    deliveryDate: dateInput ?? '',
                    location: selectValue ?? '',
                    personalData: personalData,
                    postIndex: postIndex,
                    brand:
                      getActiveRadio([this.appleRef, this.samsungRef, this.huaweiRef])?.current
                        ?.value ?? '',
                  });
                  this.refreshForm();
                  setTimeout(() => {
                    this.setState({ showAccept: false });
                  }, 1500);
                }
              }
            );
          }}
        >
          <TextInput passedRef={this.textInput}>
            {typeof textIsValid === 'boolean' && !textIsValid && (
              <ErrorMessage errorText={VALIDATION.NAME_INPUT.error} />
            )}
          </TextInput>
          <Select passedRef={this.selectOptions}>
            {typeof selectIsValid === 'boolean' && !selectIsValid && (
              <ErrorMessage errorText={VALIDATION.SELECT_INPUT.error} />
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
          <Uploader passedRef={this.uploaderRef}>
            {typeof uploaderisValid === 'boolean' && !uploaderisValid && (
              <ErrorMessage errorText={VALIDATION.UPLOADER.error} />
            )}
          </Uploader>
          <CheckboxGroup passedRef={this.checkboxInput}>
            {typeof checkboxIsCheck === 'boolean' && !checkboxIsCheck && (
              <ErrorMessage errorText={VALIDATION.CHECKBOX.error} />
            )}
          </CheckboxGroup>
          <Submit />
        </form>
        {showAccept && <div className="accepted">YOUR DELIVERY ACCEPTED</div>}
      </>
    );
  }
  handleFormValidation = () =>
    this.state.textIsValid &&
    this.state.selectIsValid &&
    this.state.dateIsValid &&
    this.state.uploaderisValid;

  refreshForm = () => {
    if (this.handleFormValidation()) {
      this.textInput.current!.value = '';
      this.selectOptions.current!.value = 'default';
      this.samsungRef.current!.checked = true;
      this.dateInput.current!.value = '';
      this.uploaderRef.current!.value = '';
      this.checkboxInput.current!.checked = false;
    }
  };
}

export default Form;
