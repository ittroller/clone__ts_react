import { Form, Input, FormItemProps } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';
import type {
  Control,
  FieldValues,
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
  UseFormReturn,
} from 'react-hook-form';
import { InputProps } from 'antd/lib/input';

export interface InputFieldProps {
  name: string;
  control: Control<any, any>;
  rules: Object;
  hookForm?: UseFormReturn;
  formProps?: FormItemProps;
  inputProps?: InputProps;
  callbackOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pattern?: any;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  control,
  rules,
  hookForm,
  formProps,
  inputProps,
  callbackOnChange,
  pattern,
}) => {
  const InputRender: React.FC<{
    field: ControllerRenderProps<FieldValues, string>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FieldValues>;
  }> = ({ field, fieldState, formState }) => {
    /*
      field:
       onChange / onBlur / value / disabled / name / ref
      fieldState:
        invalid / isTouched / isDirty / error
      formState:
        dirtyFields / touchedFields / defaultValues / isSubmitted / isSubmitSuccessful / isSubmitting / isLoading
        submitCount / isValid / isValidating / errors
    */

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (pattern) {
        if (e.target.value === '' || pattern.test(e.target.value)) {
          hookForm?.setValue(name, e.target.value);
        }
      } else {
        hookForm?.setValue(name, e.target.value);
      }

      callbackOnChange?.(e);
    };

    return (
      <Form.Item {...formProps}>
        <Input {...field} {...inputProps} onChange={onChange} />
      </Form.Item>
    );
  };

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field, fieldState, formState }) => (
        <InputRender field={field} fieldState={fieldState} formState={formState} />
      )}
    />
  );
};

export default InputField;
