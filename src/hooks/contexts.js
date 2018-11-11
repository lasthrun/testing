import { useState, useContext } from 'react';
import { ENGLISH } from '../constants/LANGUAGE_TYPES';
import Context from '../Context';

export const useContextCreator = () => {
  const [language, setLanguage] = useState(ENGLISH);

  return {
    language,
    setLanguage,
  };
};

export const useAppContext = () => useContext(Context);
