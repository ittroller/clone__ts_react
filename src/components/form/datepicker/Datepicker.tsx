import React from 'react';
import { DatePicker, Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { DatePickerProps } from 'antd/lib/date-picker';
import { FieldInputProps, FormikErrors, FormikTouched } from 'formik';
import moment, { Moment } from 'moment-timezone';

type Props = {
  label?: string;
  touched?: boolean | FormikTouched<any> | Array<FormikTouched<any>>;
  error?: string | string[] | FormikErrors<any> | Array<FormikErrors<any>>;
  datepickerProps?: DatePickerProps;
  setFieldValue: (field: string, value: any) => void;
  field: FieldInputProps<any>;
  format?: string;
  placeholder?: string;
  disabled?: boolean;
  callBackOnChange?: (...args: any[]) => void;
} & Omit<FormItemProps, 'children'>;

const DatepickerField: React.FC<Props> = ({
  label,
  touched,
  error,
  field,
  setFieldValue,
  datepickerProps,
  placeholder,
  format,
  disabled,
  callBackOnChange,
  ...rest
}) => {
  const onChange = (_: Moment | null, dateString: string): void => {
    setFieldValue(field.name, dateString);
    callBackOnChange?.();
  };

  const valueMoment = field.value ? moment(field.value) : undefined;

  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={(touched && error) as string}
      {...rest}
    >
      <DatePicker
        {...field}
        {...datepickerProps}
        format={format}
        placeholder={placeholder}
        allowClear
        onChange={onChange}
        value={valueMoment}
        style={{ width: '100%' }}
        disabled={disabled}
      />
    </Form.Item>
  );
};

export default DatepickerField;
