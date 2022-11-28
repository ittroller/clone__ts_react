import React from 'react';
import { Form, Input } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';

export type InputFieldProps = {
  label?: string;
  field: FieldInputProps<any>;
  inputProps?: InputProps;
  touched?: boolean | FormikTouched<any> | Array<FormikTouched<any>>;
  error?: string | string[] | FormikErrors<any> | Array<FormikErrors<any>>;
  disabled?: boolean;
  callbackOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFieldValue: (field: any, value: any) => any;
  pattern?: any;
  children?: React.ReactNode;
  ref?: any;
} & Omit<FormItemProps, 'children'>;

const InputField: React.FC<InputFieldProps> = ({
  label,
  touched,
  error,
  field,
  inputProps,
  disabled,
  pattern,
  ref,
  setFieldValue,
  children,
  callbackOnChange,
  ...rest
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (pattern) {
      if (e.target.value === '' || pattern.test(e.target.value)) {
        setFieldValue(field.name, e.target.value);
      }
    } else {
      setFieldValue(field.name, e.target.value);
    }

    callbackOnChange?.(e);
  };

  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={(touched && error) as string}
      {...rest}
    >
      <Input
        {...field}
        {...inputProps}
        style={{ fontSize: 'inherit' }}
        onChange={onChange}
        disabled={disabled ?? false}
        ref={ref}
      />
      {children}
    </Form.Item>
  );
};

export default InputField;
