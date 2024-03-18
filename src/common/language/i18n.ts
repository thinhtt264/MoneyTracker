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
export const defaultNS = 'en';
export const fallbackNS = 'en';

/**
 * Config i18n for app
 */
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: resources,
    lng: 'en',
    // have a common namespace used around the full app
    ns: ['en', 'vi'],
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
