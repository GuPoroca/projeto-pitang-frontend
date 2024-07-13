import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';

const Popup = ({ promise }) => {
  const toast = useToast();

  useEffect(() => {
    if (promise) {
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
      });
    }
  }, [promise, toast]);

  return null; // Esse componente não renderiza nada
};

export default Popup;
