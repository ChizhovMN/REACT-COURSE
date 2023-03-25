import React from 'react';
import FieldWrapper from '../FieldWrapper';
import { BRANDS, LABEL } from '../../helpers/const';
import { RadioGroupProps } from 'types';
import Radio from './Radio';

class RadioGroup extends React.Component<RadioGroupProps> {
  render(): React.ReactNode {
    const { appleRef, samsungRef, huaweiRef } = this.props;
    return (
      <FieldWrapper label={LABEL.RADIO_GROUP}>
        <fieldset>
          <Radio passedRef={samsungRef} brand={BRANDS.SAMSUNG} defaultCheck={true} />
          <Radio passedRef={appleRef} brand={BRANDS.APPLE} />
          <Radio passedRef={huaweiRef} brand={BRANDS.HUAWEI} />
        </fieldset>
      </FieldWrapper>
    );
  }
}

export default RadioGroup;
