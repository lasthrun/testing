import { useState } from 'react';
/**
 * @description create dialog handler
 * @return {object}
 * */
export const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => { setIsOpen(true); };
  const closeDialog = () => { setIsOpen(false); };

  return {
    isOpen,
    openDialog,
    closeDialog,
  };
};
