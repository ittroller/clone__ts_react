import React from 'react';
import { Form, Radio } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { RadioChangeEvent, RadioGroupProps } from 'antd/lib/radio';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';

export type RadioGroupFieldProps = {
  field: FieldInputProps<any>;
  optionsSelect: Array<{ label: string; value: number | string }>;
  label?: string;
  radioProps?: RadioGroupProps;
  touched?: boolean | FormikTouched<any> | Array<FormikTouched<any>>;
  error?: string | string[] | FormikErrors<any> | Array<FormikErrors<any>>;
  onChange?: (e: RadioChangeEvent) => void;
  disabled?: boolean;
} & Omit<FormItemProps, 'children'>;

const RadioGroupField: React.FC<RadioGroupFieldProps> = ({
  label,
  touched,
  error,
  field,
  radioProps,
  optionsSelect,
  disabled,
  onChange,
  ...rest
}) => {
  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={(touched && error) as string}
      {...rest}
    >
      <Radio.Group {...field} {...radioProps} options={optionsSelect} onChange={onChange} disabled={disabled} />
    </Form.Item>
  );
};

export default RadioGroupField;
