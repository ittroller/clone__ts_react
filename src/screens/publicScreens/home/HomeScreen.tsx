import { Button, Divider } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

const HomeScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <h1>
      {t('homePage.title')}
      <Divider />
      <Button type="primary">HAHAHAAA</Button>
    </h1>
  );
};

export default HomeScreen;
