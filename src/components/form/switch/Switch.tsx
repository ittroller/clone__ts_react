import React from 'react';
import { Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import Switch, { SwitchProps } from 'antd/lib/switch';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';

type Props = {
  field: FieldInputProps<any>;
  label?: string;
  switchProps?: SwitchProps;
  touched?: boolean | FormikTouched<any> | Array<FormikTouched<any>>;
  error?: string | string[] | FormikErrors<any> | Array<FormikErrors<any>>;
  onChange?: (e: any) => void;
} & Omit<FormItemProps, 'children'>;

const SwitchField: React.FC<Props> = ({ label, touched, error, field, switchProps, onChange, ...rest }) => {
  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={(touched && error) as string}
      {...rest}
    >
      <Switch {...field} checked={Boolean(field.value)} {...switchProps} onChange={onChange} />
    </Form.Item>
  );
};

export default SwitchField;
