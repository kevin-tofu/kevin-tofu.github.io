import { defineBoot } from '#q-app/wrappers';
import { createI18n } from 'vue-i18n';
import { watch } from 'vue';
import type { Ref } from 'vue';
import { Lang } from 'quasar';
import langEnUS from 'quasar/lang/en-US';
import langJa from 'quasar/lang/ja';

import messages from 'src/i18n';

export type MessageLanguages = keyof typeof messages;
// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = typeof messages['en-US'];

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
/* eslint-enable @typescript-eslint/no-empty-object-type */

export default defineBoot(({ app }) => {
  const savedLocale = (typeof localStorage !== 'undefined' && localStorage.getItem('locale')) || undefined;
  const initialLocale = savedLocale === 'ja-JP' ? 'ja-JP' : 'en-US';
  const quasarLangMap: Record<MessageLanguages, typeof langEnUS> = {
    'en-US': langEnUS,
    'ja-JP': langJa
  };

  const i18n = createI18n<{ message: MessageSchema }, MessageLanguages>({
    locale: initialLocale,
    legacy: false,
    fallbackLocale: 'en-US',
    messages,
  });

  // Set i18n instance on app
  app.use(i18n);

  Lang.set(quasarLangMap[initialLocale]);
  const localeRef = i18n.global.locale as unknown as Ref<MessageLanguages>;

  watch(localeRef, (newLocale) => {
    const localeKey = newLocale || 'en-US';
    Lang.set(quasarLangMap[localeKey] || langEnUS);
  });
});
