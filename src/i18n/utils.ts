import { fr } from './fr';
import { en } from './en';

export type Lang = 'fr' | 'en';

const translations = { fr, en } as const;

export function getTranslations(lang: Lang) {
  return translations[lang] as Record<string, string>;
}
