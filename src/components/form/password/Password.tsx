import React from 'react';
import { Form, Input } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';

type Props = {
  label?: string;
  field: FieldInputProps<any>;
  inputProps?: InputProps;
  touched?: boolean | FormikTouched<any> | Array<FormikTouched<any>>;
  error?: string | string[] | FormikErrors<any> | Array<FormikErrors<any>>;
  setFieldValue?: (field: string, value: any) => void;
  pattern?: any;
} & Omit<FormItemProps, 'children'>;

const PasswordField: React.FC<Props> = ({ label, touched, error, field, inputProps, pattern, ...rest }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (pattern) {
      if (e.target.value === '' || pattern.test(e.target.value)) {
        field.onChange(e);
      }
    } else {
      field.onChange(e);
    }
  };

  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={(touched && error) as string}
      {...rest}
    >
      <Input.Password {...field} {...inputProps} style={{ fontSize: 'inherit' }} onChange={onChange} />
    </Form.Item>
  );
};

export default PasswordField;
