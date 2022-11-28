import React from 'react';
import { Form, Select } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { SelectProps } from 'antd/lib/select';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';

type Props = {
  label?: string;
  field: FieldInputProps<any>;
  optionsSelect: Array<{
    label: string | React.ReactElement;
    value: number | string;
    disabled?: boolean;
  }>;
  setFieldValue: (field: string, value: any) => void;
  selectProps?: SelectProps<any>;
  touched?: boolean | FormikTouched<any> | Array<FormikTouched<any>>;
  error?: string | string[] | FormikErrors<any> | Array<FormikErrors<any>>;
  notFoundContent?: React.ReactNode;
  disabled?: boolean;
} & Omit<FormItemProps, 'children'>;

const SelectField: React.FC<Props> = ({
  label,
  touched,
  error,
  field,
  selectProps,
  optionsSelect,
  setFieldValue,
  notFoundContent,
  disabled,
  ...rest
}) => {
  const onChange = (e: any): void => {
    setFieldValue(field.name, e);
  };

  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={(touched && error) as string}
      {...rest}
    >
      <Select
        {...field}
        {...selectProps}
        options={optionsSelect}
        onChange={onChange}
        notFoundContent={notFoundContent}
        disabled={disabled}
      />
    </Form.Item>
  );
};

export default SelectField;
