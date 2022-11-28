import React from 'react';
import { Form, Input } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { TextAreaProps } from 'antd/lib/input/TextArea';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';

const { TextArea } = Input;

type Props = {
  label?: string | React.ReactElement;
  field: FieldInputProps<any>;
  textAreaProps?: TextAreaProps;
  placeholder?: string;
  touched?: boolean | FormikTouched<any> | Array<FormikTouched<any>>;
  error?: string | string[] | FormikErrors<any> | Array<FormikErrors<any>>;
  disabled?: boolean;
} & Omit<FormItemProps, 'children'>;

const TextAreaField: React.FC<Props> = ({
  label,
  touched,
  error,
  field,
  textAreaProps,
  placeholder,
  disabled,
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
      <TextArea
        {...field}
        {...textAreaProps}
        disabled={disabled}
        placeholder={placeholder}
        style={{ fontSize: 'inherit' }}
      />
    </Form.Item>
  );
};

export default TextAreaField;
