import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { LANGUAGE } from 'src/constants';

import { en } from './locales/en';
import { vi } from './locales/vi';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: LANGUAGE.VI,
    debug: false,
    lng: LANGUAGE.EN,
    resources: {
      en: {
        translation: en,
      },
      vi: {
        translation: vi,
      },
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })
  .catch(error => {
    throw error;
  });

const I18n = i18n;
// const t = (...args: Parameters<TFunction>) => I18n.t(...args);

export { I18n };
