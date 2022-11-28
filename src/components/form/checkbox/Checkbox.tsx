import React from 'react';
import { Checkbox, CheckboxProps, Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { TextAreaProps } from 'antd/lib/input/TextArea';
import { FieldInputProps, FormikErrors, FormikTouched } from 'formik';
import { CheckboxChangeEvent } from 'antd/lib/checkbox/Checkbox';

type Props = {
  label?: string;
  field: FieldInputProps<any>;
  textAreaProps?: TextAreaProps;
  checkboxProps?: CheckboxProps;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<FormikErrors<any>> | Promise<void>;
  touched?: boolean | FormikTouched<any> | Array<FormikTouched<any>>;
  error?: string | string[] | FormikErrors<any> | Array<FormikErrors<any>>;
} & Omit<FormItemProps, 'children'>;

const CheckboxField: React.FC<Props> = ({ label, touched, error, field, checkboxProps, setFieldValue, ...rest }) => {
  const onChange = (e: CheckboxChangeEvent): void => {
    void setFieldValue?.(field.name, e.target.checked);
  };

  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={(touched && error) as string}
      {...rest}
    >
      <Checkbox {...field} {...checkboxProps} style={{ fontSize: 'inherit' }} onChange={onChange} />
    </Form.Item>
  );
};

export default CheckboxField;
