import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Flex,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import "../components/style.css";
import TabelaAgendamento from "../components/TabelaAgendamento/TabelaAgendamento";

const Agendamentos = () => {
  const backend_URL = import.meta.env.VITE_BACKEND_URL;
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backend_URL}/api/agendamentos`);
        const formattedData = response.data.items.map((item) => ({
          ...item,
          dataNascimento: format(new Date(item.dataNascimento), "dd/MM/yyyy", {
            locale: ptBR,
          }),
          dataAgendamento: format(
            new Date(item.dataAgendamento),
            "dd/MM/yyyy HH:mm",
            { locale: ptBR }
          ),
        }));
        setAgendamentos(formattedData);
      } catch (error) {
        console.error("Erro ao buscar os agendamentos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"75vw"} py={12} px={3}>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"}>Encontre o seu Agendamento</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Não perca a hora da vacina!
          </Text>
        </Stack>
        <TabelaAgendamento agendamentos={agendamentos} />
      </Stack>
    </Flex>
  );
};

export default Agendamentos;
