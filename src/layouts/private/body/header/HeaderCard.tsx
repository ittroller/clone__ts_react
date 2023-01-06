import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { HeaderCardStyle } from './HeaderCard.style';

const HeaderCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HeaderCardStyle className="body-header">
      <Link to={'/login'}>{t('private.goto_my_page')}</Link>
    </HeaderCardStyle>
  );
};

export default HeaderCard;
