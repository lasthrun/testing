import { useState, useContext } from 'react';
import { ENGLISH } from '../constants/LANGUAGE_TYPES';
import Context from '../Context';
/**
 * @description create context api states
 * @return {object} context states
 * */
export const useContextCreator = () => {
  const [language, setLanguage] = useState(ENGLISH);

  return {
    language,
    setLanguage,
  };
};
/**
 * @description return context api data
 * @return {object} context api data
 * */
export const useAppContext = () => useContext(Context);
