import React, { createContext, useContext, useState } from 'react';
import { useToast } from '@chakra-ui/react';

const ToastContext = createContext();

export const useToastContext = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const toast = useToast();
  const [toastPromise, setToastPromise] = useState(null);

  const showToast = (promise) => {
    setToastPromise(promise);
    toast.promise(promise, {
      success: {
        title: 'Agendado com sucesso',
        description: 'Seu agendamento foi salvo',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      },
      error: {
        title: 'Agendamento recusado',
        description: 'Esse horário está indisponível, tente outro',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      },
      loading: {
        title: 'Carregando agendamento',
        description: 'Por favor espere',
        status: 'loading',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      },
    }).finally(() => {
      setToastPromise(null);
    });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
    </ToastContext.Provider>
  );
};
