import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Switch } from 'antd';

import { useAppDispatch, useAppSelector } from 'src/stores';
import { changeLanguageAction } from 'src/stores/app/i18n/i18n.action';
import { useTheme } from 'src/contexts/theme/ThemeContext';
import { HeaderCardStyle } from './HeaderCard.style';
import { LANGUAGE, THEME_TYPE } from 'src/constants';

import DARK_ICON from 'src/assets/icons/theme-dark-icon.svg';
import LIGHT_ICON from 'src/assets/icons/theme-light-icon.svg';

const HeaderCard: React.FC = () => {
  const { t } = useTranslation();
  const dispath = useAppDispatch();
  const { language } = useAppSelector(state => state.app.i18n);

  const { theme, setTheme } = useTheme();

  const switchLanguage = useMemo(() => {
    return (
      <Switch
        className="switch-language"
        checkedChildren={<>{LANGUAGE.VI}</>}
        unCheckedChildren={<>{LANGUAGE.EN}</>}
        checked={language === LANGUAGE.VI}
        onChange={() => {
          const anotherLanguage = language === LANGUAGE.VI ? LANGUAGE.EN : LANGUAGE.VI;
          void dispath(changeLanguageAction(anotherLanguage));
        }}
      />
    );
  }, [language]);

  return (
    <HeaderCardStyle className="body-header">
      {switchLanguage}

      <Switch
        className="switch-theme"
        checkedChildren={<img height={18} width={20} src={LIGHT_ICON} alt="LIGHT_ICON" />}
        unCheckedChildren={<img height={18} width={20} src={DARK_ICON} alt="DARK_ICON" />}
        checked={theme === THEME_TYPE.LIGHT}
        onChange={() => {
          const anotherTheme = theme === THEME_TYPE.LIGHT ? THEME_TYPE.DARK : THEME_TYPE.LIGHT;
          void setTheme(anotherTheme);
        }}
      />

      <Link to={'/login'}>{t('public.go_to_login')}</Link>
    </HeaderCardStyle>
  );
};

export default HeaderCard;
