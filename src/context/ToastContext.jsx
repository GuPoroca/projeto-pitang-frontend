import React, { createContext, useContext, useState } from 'react';
import ToastComponent from '../components/Toast';

const ToastContext = createContext();

export const useToastContext = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toastPromise, setToastPromise] = useState(null);

  const showToast = (promise) => {
    setToastPromise(promise);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastComponent toastPromise={toastPromise} setToastPromise={setToastPromise} />
    </ToastContext.Provider>
  );
};
