import i18next, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './locales';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (callback: any) => {
    callback('en');
  },
  init: () => {},
  cacheUserLanguage: () => {},
};
export const defaultNS = 'common';
export const fallbackNS = 'common';

/**
 * Config i18n for app
 */
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    returnNull: false,
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: {
      en: {
        common: resources.en,
      },
      vi: {
        common: resources.vi,
      },
    },
    lng: 'en',
    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS,
    fallbackNS,
    debug: false,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  });

export default i18next;
export const translate = i18next.t;
