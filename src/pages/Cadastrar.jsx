'use client'
import DatePicker from '../components/DatePicker';
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
} from '@chakra-ui/react'

const Cadastrar = () => {
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
          <Stack spacing={4}>
            <FormControl id="nome">
              <FormLabel>Nome Completo</FormLabel>
              <Input type="nome" />
            </FormControl>
            <Stack spacing={10}>
            <FormControl id="data">
              <FormLabel>Data de Nascimento</FormLabel>
              <DatePicker time={false}/>
            </FormControl>
            <FormControl id="data">
              <FormLabel>Data do Agendamento</FormLabel>
              <DatePicker time={true}/>
            </FormControl>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Cadastrar;