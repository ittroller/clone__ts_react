import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

const HomeScreen: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    console.log('HomeScreen.tsx - useEffect');
  }, []);

  return (
    <>
      Home Screen
      <hr />
      <Button type="primary">{t('global.go_to_home')}</Button>
    </>
  );
};

export default HomeScreen;
