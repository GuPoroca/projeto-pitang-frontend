import { useState } from "react";
import { Button } from 'primereact/button';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Flex, Stack, Heading, Text, useColorModeValue, Input } from "@chakra-ui/react";
import "../components/style.css";
import TabelaAgendamento from "../components/TabelaAgendamento/TabelaAgendamento";

const Agendamentos = () => {
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;
  
    const [nameFilter, setNameFilter] = useState('');
    const [filteredAgendamentos, setFilteredAgendamentos] = useState([]);

    const agendamentos = [
        {
            id: 1,
            nome: "Marcos Castro",
            dataNascimento: new Date().toLocaleDateString(),
            dataAgendamento: new Date().toLocaleString(),
        },
        {
            id: 2,
            nome: "Keven Leone",
            dataNascimento: new Date().toLocaleDateString(),
            dataAgendamento: new Date().toLocaleString(),
        },
        {
            id: 3,
            nome: "Gustavo Poroca",
            dataNascimento: new Date().toLocaleDateString(),
            dataAgendamento: new Date().toLocaleString(),
        },
        {
            id: 4,
            nome: "Modas Castro",
            dataNascimento: new Date().toLocaleDateString(),
            dataAgendamento: new Date().toLocaleString(),
        },
        {
            id: 5,
            nome: "Keven Modas",
            dataNascimento: new Date().toLocaleDateString(),
            dataAgendamento: new Date().toLocaleString(),
        },
        {
            id: 6,
            nome: "Gusmodas Poroca",
            dataNascimento: new Date().toLocaleDateString(),
            dataAgendamento: new Date().toLocaleString(),
        },
    ];

    const onNameFilterChange = (e) => {
        const value = e.target.value;
        setNameFilter(value);

        const filteredData = agendamentos.filter((agendamento) => {
            return agendamento.nome.toLowerCase().includes(value.toLowerCase());
        });

        setFilteredAgendamentos(filteredData);
    };

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
                <TabelaAgendamento agendamentos={agendamentos}/>
            </Stack>
        </Flex>
    );
};

export default Agendamentos;
