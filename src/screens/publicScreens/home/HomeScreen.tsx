/* eslint-disable no-console */
import { Button, Divider, Input } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useForm, Controller } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { InputField } from 'src/components/hook-form';

interface FormValues {
  firstName: string;
  lastName: string;
}

const HomeScreen: React.FC = () => {
  const { t } = useTranslation();

  const methods = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
  };

  return (
    <h1>
      {t('homePage.title')}
      <Divider />

      <form
        onSubmit={event => {
          event.preventDefault();
          void handleSubmit(onSubmit)(event);
        }}
      >
        <Controller
          name="firstName"
          rules={{ required: 'This field is required' }}
          control={control}
          render={({ field }) => <Input {...field} />}
        />

        <InputField
          control={control}
          name="lastName"
          rules={{ required: true }}
          formProps={{
            label: 'HAHA',
          }}
        />

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
    </h1>
  );
};

export default HomeScreen;
