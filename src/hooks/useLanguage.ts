import { useEffect } from 'react';

import { changeLanguage } from 'src/stores/app/i18n/i18n.action';
import { RootState, useAppDispatch, useAppSelector } from 'src/stores';
import { LANGUAGE, LOCAL_STORAGE_KEY } from 'src/constants';

interface IUseLanguage {
  language: string;
  switchLanguage: (val: string) => Promise<void>;
}

const useLanguage = (): IUseLanguage => {
  const language = useAppSelector((state: RootState) => state.app.i18n.language);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void switchLanguage('');
  }, []);

  const switchLanguage = async (val: string): Promise<void> => {
    let lang: string = val;
    if (!lang?.length) {
      lang = localStorage.getItem(LOCAL_STORAGE_KEY.LANGUAGE) ?? LANGUAGE.EN;
    }

    await dispatch(changeLanguage(lang));
    localStorage.setItem(LOCAL_STORAGE_KEY.LANGUAGE, lang);
  };
  return { language, switchLanguage };
};

export default useLanguage;
