import { useState } from "react";
import { Button } from 'primereact/button';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Flex, Stack, Heading, Text, useColorModeValue, Input } from "@chakra-ui/react";
import "../style.css";


const TabelaAgendamento = ({agendamentos, numEachPage = 10}) => {
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;
  
    const [nameFilter, setNameFilter] = useState('');
    const [filteredAgendamentos, setFilteredAgendamentos] = useState([]);

    const onNameFilterChange = (e) => {
        const value = e.target.value;
        setNameFilter(value);

        const filteredData = agendamentos.filter((agendamento) => {
            return agendamento.nome.toLowerCase().includes(value.toLowerCase());
        });

        setFilteredAgendamentos(filteredData);
    };

    return(
        <DataTable
                    value={filteredAgendamentos.length ? filteredAgendamentos : agendamentos}
                    removableSort
                    paginator
                    rows={numEachPage}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} até {last} de {totalRecords}"
                    paginatorLeft={paginatorLeft}
                    paginatorRight={paginatorRight}
                    tableStyle={{ minWidth: "50rem" }}
                    className="custom-datatable"
                >
                    <Column
                        header={
                            <div  style={{ display: 'flex', alignItems: 'center' }}>
                                Nome
                                <Input
                                    value={nameFilter}
                                    onChange={onNameFilterChange}
                                    placeholder="Buscar por nome"
                                    bg="white"
                                    ml={2}
                                    size="sm"
                                />
                            </div>
                        }
                        field="nome"
                        className="custom-column"
                    ></Column>
                    <Column field="dataNascimento" header="Data de Nascimento" sortable className="custom-column"></Column>
                    <Column field="dataAgendamento" header="Data de Agendamento" sortable className="custom-column"></Column>
                </DataTable>
    )
}

export default TabelaAgendamento