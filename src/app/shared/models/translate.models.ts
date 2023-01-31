import { Language } from "./translate.interfaces";

export enum Lang {
  en = 'en',
  de = 'de',
  fr = 'fr',
  it = 'it',
  es = 'es',
  nl = 'nl',
  jp = 'jp'
}

export const SITE_LANGUAGES: Language[] = [
  { code: Lang.en, name: 'English', shortname: 'ENG' },
  { code: Lang.de, name: 'Deutsch', shortname: 'DEU' },
  { code: Lang.fr, name: 'Français', shortname: 'FRA' },
  { code: Lang.it, name: 'Italiano', shortname: 'ITA' },
  { code: Lang.es, name: 'Español', shortname: 'ESL' },
  { code: Lang.nl, name: 'Nederlands', shortname: 'NLD' },
  { code: Lang.jp, name: '日本語', shortname: 'JPN' }
];

export const DEFAULT_LANGUAGE = Lang.en;
