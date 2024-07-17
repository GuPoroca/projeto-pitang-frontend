import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Input } from "@chakra-ui/react";
import "../style.css";
import StatusButton from "./StatusButton";
import { parse } from "date-fns";

const TabelaAgendamento = ({ agendamentos, numEachPage = 7 }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [filteredAgendamentos, setFilteredAgendamentos] = useState([]);

  const onNameFilterChange = (e) => {
    const value = e.target.value;
    setNameFilter(value);

    const filteredData = agendamentos.filter((agendamento) => {
      return agendamento.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredAgendamentos(filteredData);
  };

  useEffect(() => {
    if (!agendamentos) return; // Retorna imediatamente se agendamentos for undefined
    const initializeStatus = (agendamento) => {
      if (
        agendamento.statusAgendamento === "cancelado" ||
        agendamento.statusAgendamento === "realizado"
      ) {
        return;
      }
      const today = new Date();
      const agendamentoDate = parse(
        agendamento.dataAgendamento,
        "dd/MM/yyyy HH:mm",
        new Date()
      );
      if (agendamentoDate >= today) {
        agendamento.statusAgendamento = "futuro";
      } else {
        agendamento.statusAgendamento = "pendente";
      }
    };

    agendamentos.forEach(initializeStatus);
    setFilteredAgendamentos(agendamentos);
  }, [agendamentos]);

  const handleStatusChange = (agendamento, newStatus) => {
    const updatedAgendamentos = filteredAgendamentos.map((item) =>
      item.id === agendamento.id ? { ...item, statusAgendamento: newStatus } : item
    );
    setFilteredAgendamentos(updatedAgendamentos);
  };

  return (
    <DataTable
      value={filteredAgendamentos.length ? filteredAgendamentos : agendamentos}
      removableSort
      paginator
      rows={numEachPage}
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="{first} até {last} de {totalRecords}"
      tableStyle={{ minWidth: "50rem" }}
      className="custom-datatable"
    >
      <Column
        header={
          <div style={{ display: "flex", alignItems: "center" }}>
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
        field="name"
        className="custom-column"
      ></Column>
      <Column
        field="dataNascimento"
        header="Data de Nascimento"
        sortable
        className="custom-column"
      ></Column>
      <Column
        field="dataAgendamento"
        header="Data de Agendamento"
        sortable
        className="custom-column"
      ></Column>
      <Column
        field="statusAgendamento"
        header="Status"
        body={(rowData) => (
          <StatusButton
            key={rowData.id}
            agendamento={rowData}
            onStatusChange={handleStatusChange}
          />
        )}
        className="custom-column"
      ></Column>
    </DataTable>
  );
};

export default TabelaAgendamento;
