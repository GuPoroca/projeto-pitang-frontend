import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

const Toast = ({ toastPromise, setToastPromise }) => {
  const toast = useToast();

  useEffect(() => {
    const showToast = async () => {
      try {
        if (toastPromise) {
          const result = await toastPromise;
          toast({
            title: 'Agendado com sucesso',
            description: 'Seu agendamento foi salvo',
            status: 'success',
            duration: 4000,
            isClosable: true,
            position: 'bottom-right',
          });
        }
      } catch (error) {
        toast({
          title: 'Agendamento recusado',
          description: 'Esse horário está indisponível, tente outro',
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'bottom-right',
        });
      } finally {
        setToastPromise(null);
      }
    };

    showToast();
  }, [toastPromise, toast, setToastPromise]);

  return null;
};


export default Toast;
