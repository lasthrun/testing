import { ENGLISH, TRADITIONAL_CHINESE } from '../constants/LANGUAGE_TYPES';
import enStore from './stores/en';
import tcStore from './stores/tc';

const textStore = {
  [ENGLISH]: enStore,
  [TRADITIONAL_CHINESE]: tcStore,
};

export default function ({ language, path }) {
  if (textStore[language][path] !== undefined) {
    return textStore[language][path];
  }
  throw new Error(`text not found. path: "${path}"`);
}
