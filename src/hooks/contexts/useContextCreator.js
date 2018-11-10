import { useState } from 'react';
import { ENGLISH } from '../../constants/LANGUAGE_TYPES';

export const useContextCreator = () => {
  const [language, setLanguage] = useState(ENGLISH);

  return {
    language,
    setLanguage,
  };
};
