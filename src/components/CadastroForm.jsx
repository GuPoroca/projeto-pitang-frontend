import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Stack,
  Input,
  Button,
} from "@chakra-ui/react";
import DatePicker from "./DatePicker";

const CadastroForm = () => {
  const [form, setForm] = useState({
    nome: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados do formulário:", form);
  };

  const handleDateChange = (date, field) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: date,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <FormControl isRequired id="nome">
          <FormLabel>Nome Completo</FormLabel>
          <Input type="text" value={form.nome} onChange={handleInputChange} />
        </FormControl>
        <Box mx={"unset"} textAlign={"center"}>
          <FormControl id="dataNascimento" mb={4} isRequired>
            <FormLabel>Data de Nascimento</FormLabel>
            <DatePicker
              agendamento={false}
              selected={form.dataNascimento}
              onDateChange={(date) => handleDateChange(date, "dataNascimento")}
            />
          </FormControl>
          <FormControl id="dataAgendamento" isRequired>
            <FormLabel>Data do Agendamento</FormLabel>
            <DatePicker
              agendamento={true}
              selected={form.dataAgendamento}
              onDateChange={(date) => handleDateChange(date, "dataAgendamento")}
            />
          </FormControl>
        </Box>
        <Stack spacing={10} mt={4}>
          <Button
            type="submit"
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Cadastrar
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default CadastroForm;
