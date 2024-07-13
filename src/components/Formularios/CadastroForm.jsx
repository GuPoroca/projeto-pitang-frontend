import {
  FormControl,
  FormLabel,
  Box,
  Stack,
  Input,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./CadastroZodSchema";
import DatePicker from "./DatePicker";
import axios from "axios";

const CadastroForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      dataNascimento: "",
      dataAgendamento: "",
    },
  });

  function onSubmit(values) {
    axios.post("http://localhost:3000/api/agendamentos", values)
      .then(res =>{
        console.log(res.data);
      });
    console.log(values);
    return;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">Nome Completo</FormLabel>
          <Input
            id="name"
            type="text"
            {...register("name", {
              required: "Campo Obrigatório",
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <Box mx={"unset"} textAlign={"center"}>
          <FormControl mb={4} isInvalid={errors.dataNascimento}>
            <FormLabel htmlFor="dataNascimento">Data de Nascimento</FormLabel>
            <Controller
              control={control}
              name="dataNascimento"
              rules={{
                required: "Campo Obrigatório",
              }}
              render={({ field }) => (
                <>
                  <DatePicker
                    id="dataNascimento"
                    aria-label="dataNascimento-label"
                    agendamento={false}
                    selected={field.value}
                    onDateChange={(date) => field.onChange(date)}
                  />
                  <FormErrorMessage>
                    {errors.dataNascimento && errors.dataNascimento.message}
                  </FormErrorMessage>
                </>
              )}
            />
          </FormControl>
          <FormControl mb={4} isInvalid={errors.dataAgendamento}>
            <FormLabel htmlFor="dataAgendamento">Data de Agendamento</FormLabel>
            <Controller
              control={control}
              name="dataAgendamento"
              rules={{
                required: "Campo Obrigatório",
              }}
              render={({ field }) => (
                <>
                  <DatePicker
                    id="dataAgendamento"
                    aria-label="dataAgendamento-label"
                    agendamento={true}
                    selected={field.value}
                    onDateChange={(date) => field.onChange(date)}
                  />
                  <FormErrorMessage>
                    {errors.dataAgendamento && errors.dataAgendamento.message}
                  </FormErrorMessage>
                </>
              )}
            />
          </FormControl>
        </Box>
        <Stack spacing={10} mt={4}>
          <Button
            isLoading={isSubmitting}
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
