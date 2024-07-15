import CadastroForm from "../components/Formularios/CadastroForm.jsx";
import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Cadastrar = () => {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={3}>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"}>Cadastre o seu agendamento</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Para tomar a vacina contra o Covid-19
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <CadastroForm />
        </Box>
      </Stack>
    </Flex>
  );
};

export default Cadastrar;
