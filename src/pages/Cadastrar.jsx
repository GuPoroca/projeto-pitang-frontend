"use client";
import DatePicker from "../components/DatePicker";
import { useState } from 'react'; 
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Cadastrar = () => {

    const [form, setForm] = useState({
        nome: '',
        dataNascimento: new Date(),
        dataAgendamento: new Date(),
      });

      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setForm({
          ...form,
          [id]: value, 
        });
      };
    
     
      const handleDateChange = (date, field) => {
        setForm({
          ...form,
          [field]: date,
        });
      };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados do formulário:', form);
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'}>Cadastre o seu agendamento</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Para tomar a vacina contra o Covid-19
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="nome">
                <FormLabel>Nome Completo</FormLabel>
                <Input
                  type="text"
                  value={form.nome}
                  onChange={handleInputChange} // Atualiza o estado do nome
                />
              </FormControl>
              <Box mx={'auto'} textAlign={'center'}>
                <FormControl id="dataNascimento" mb={4}>
                  <FormLabel>Data de Nascimento</FormLabel>
                  <DatePicker
                    time={false}
                    selected={form.dataNascimento}
                    onChange={(date) => handleDateChange(date, 'dataNascimento')} // Atualiza o estado da data de nascimento
                  />
                </FormControl>
                <FormControl id="dataAgendamento">
                  <FormLabel>Data do Agendamento</FormLabel>
                  <DatePicker
                    time={true}
                    selected={form.dataAgendamento}
                    onChange={(date) => handleDateChange(date, 'dataAgendamento')} // Atualiza o estado da data do agendamento
                  />
                </FormControl>
              </Box>
              <Stack spacing={10} mt={4}>
                <Button
                  type="submit"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Cadastrar
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Cadastrar;
