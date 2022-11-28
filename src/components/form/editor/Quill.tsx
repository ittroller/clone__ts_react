import React from 'react';
import { Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { FieldInputProps, FormikErrors, FormikTouched } from 'formik';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type Props = {
  label?: string;
  field: FieldInputProps<any>;
  // @ts-expect-error
  richTextEditorProps?: ReactQuill.ComponentProps;
  setFieldValue: (field: string, value: any) => void;
  placeholder?: string;
  touched?: boolean | FormikTouched<any> | Array<FormikTouched<any>>;
  error?: string | string[] | FormikErrors<any> | Array<FormikErrors<any>>;
  disable?: boolean;
} & Omit<FormItemProps, 'children'>;

const QuillEditor: React.FC<Props> = ({
  label,
  touched,
  error,
  field,
  richTextEditorProps,
  setFieldValue,
  placeholder,
  disable,
  ...rest
}) => {
  const handleChange = (value: string): void => {
    setFieldValue(field.name, value);
  };
  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={(touched && error) as string}
      {...rest}
    >
      <ReactQuill
        theme={'snow'}
        {...richTextEditorProps}
        value={field.value}
        onChange={handleChange}
        placeholder={placeholder}
        style={{ fontSize: 'inherit' }}
        readOnly={disable ?? false}
      />
    </Form.Item>
  );
};

export default QuillEditor;
