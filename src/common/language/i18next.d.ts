import { defaultNS } from './i18n';
import resources from './locales';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
    defaultNS: typeof defaultNS;
    resources: typeof resources;
  }
}
