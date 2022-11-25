import React from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

const HomeScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      Home Screen
      <hr />
      <Button type="primary">{t('global.go_to_home')}</Button>
    </>
  );
};

export default HomeScreen;
