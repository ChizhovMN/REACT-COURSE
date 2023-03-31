import React, { useState } from 'react';
import { VALIDATION } from '../../helpers/validation';
import { formatDate } from '../../helpers/helper';
import ErrorMessage from './ErrorMessage';
import { FormCardType, FormProps, FormState } from 'types';
import FieldWrapper from '../FieldWrapper';
import { BRANDS, LABEL, LIST_OF_COUNTRIES } from '../../helpers/const';
import Radio from './Radio';
import { useForm } from 'react-hook-form';

const Form: React.FC<FormProps> = ({ handleAddCard }) => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormState>({
    defaultValues: {
      name: '',
      country: 'default',
      brand: 'Samsung',
      date: '',
      uploader: null,
      checkbox: false,
    },
  });
  const onReset = () =>
    reset({
      name: '',
      country: 'default',
      brand: 'Samsung',
      date: '',
      uploader: null,
      checkbox: false,
    });
  const onAddCard = ({
    img,
    personalData,
    location,
    postIndex,
    deliveryDate,
    brand,
  }: FormCardType) =>
    handleAddCard({
      img: img,
      deliveryDate: deliveryDate,
      location: location,
      personalData: personalData,
      postIndex: postIndex,
      brand: brand,
    });
  const onSubmit = (data: FormState) => {
    const { name, country: location, brand, date: deliveryDate, uploader } = data;
    const [personalData, postIndex] = name?.split(',') ?? '';
    if (data && uploader) {
      const file = uploader[0];
      const img = URL.createObjectURL(file);
      onAddCard({ img, deliveryDate, brand, personalData, postIndex, location });
      onReset();
      setShow(true);
      setTimeout(() => setShow(false), 2000);
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <FieldWrapper label={LABEL.NAME_INPUT}>
        <input
          type={'text'}
          className="input-text input"
          placeholder="Type here your name and zip-code..."
          {...register('name', {
            required: true,
            pattern: VALIDATION.NAME_INPUT.regExp,
          })}
        />
        {errors.name && <ErrorMessage errorText={VALIDATION.NAME_INPUT.error} />}
      </FieldWrapper>
      <FieldWrapper label={LABEL.SELECT_INPUT}>
        <select
          className="select"
          defaultValue={'default'}
          {...register('country', { validate: (value) => value !== 'default' })}
        >
          <option disabled value={'default'}>
            SELECT COUNTRY
          </option>
          {LIST_OF_COUNTRIES.map((country) => (
            <option key={country.id} value={country.country}>
              {country.country}
            </option>
          ))}
        </select>
        {errors.country && <ErrorMessage errorText={VALIDATION.SELECT_INPUT.error} />}
      </FieldWrapper>
      <FieldWrapper label={LABEL.RADIO_GROUP}>
        <fieldset>
          <Radio brand={BRANDS.SAMSUNG} defaultCheck={true} register={register} />
          <Radio brand={BRANDS.APPLE} register={register} />
          <Radio brand={BRANDS.HUAWEI} register={register} />
        </fieldset>
      </FieldWrapper>
      <FieldWrapper label={LABEL.DATE_INPUTE}>
        <input
          id={LABEL.DATE_INPUTE.htmlFor}
          className="input-date input"
          type={'date'}
          {...register('date', {
            required: true,
            min: formatDate(VALIDATION.DATE_INPUT.min),
            max: formatDate(VALIDATION.DATE_INPUT.max),
          })}
        />
        {errors.date && <ErrorMessage errorText={VALIDATION.DATE_INPUT.error} />}
      </FieldWrapper>
      <FieldWrapper label={LABEL.UPLOADER}>
        <input
          type={'file'}
          className="input-text input"
          accept="image/*"
          {...register('uploader', { required: true })}
        />
        {errors.uploader && <ErrorMessage errorText={VALIDATION.UPLOADER.error} />}
      </FieldWrapper>
      <FieldWrapper label={LABEL.CHECKBOX}>
        <input
          type={'checkbox'}
          className="input-checkbox input"
          {...register('checkbox', { required: true })}
        />
        {errors.checkbox && <ErrorMessage errorText={LABEL.CHECKBOX.labelText} />}
      </FieldWrapper>
      {show && <div className="accepted">YOUR DELIVERY ACCEPTED</div>}
      <button type="submit" disabled={show}>
        ORDER!
      </button>
    </form>
  );
};

export default Form;
