import React, { useState } from "react";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import axios from "axios";

const StatusButton = ({ agendamento, onStatusChange }) => {
  const backend_URL = import.meta.env.VITE_BACKEND_URL;
  const [localAgendamento, setLocalAgendamento] = useState(agendamento);

  const handleStatusChange = async (newStatus) => {
    try {
      const response = await axios.post(
        `${backend_URL}/api/agendamentostatus`,
        {
          id: localAgendamento.id,
          name: localAgendamento.name,
          statusAgendamento: newStatus,
        }
      );

      if (response.status === 201) {
        console.log("Status alterado com sucesso no backend");
        const updatedAgendamento = {
          ...localAgendamento,
          statusAgendamento: newStatus,
        };
        setLocalAgendamento(updatedAgendamento);
        onStatusChange(localAgendamento, newStatus);
      }
    } catch (error) {
      console.error("Erro ao atualizar o status do agendamento", error);
    }
  };

  if (localAgendamento.statusAgendamento === "futuro") {
    return (
      <>
        <Tooltip target=".target-clock" />
        <i
          className="target-clock pi pi-clock"
          style={{ fontSize: "1.5rem" }}
          data-pr-tooltip="Agendamento futuro"
        />
      </>
    );
  }

  if (localAgendamento.statusAgendamento === "realizado") {
    return (
      <>
        <Tooltip target=".target-check" />
        <i
          className="target-check pi pi-check"
          style={{ fontSize: "1.5rem", color: "var(--blue-400)" }}
          data-pr-tooltip="Agendamento realizado"
        />
      </>
    );
  }

  if (localAgendamento.statusAgendamento === "cancelado") {
    return (
      <>
        <Tooltip target=".target-times" />
        <i
          className="target-times pi pi-times"
          style={{ fontSize: "1.5rem", color: "var(--red-400)" }}
          data-pr-tooltip="Agendamento cancelado"
        />
      </>
    );
  }

  return (
    <div className="flex flex-wrap justify-content-center gap-3">
      <Button
        style={{ backgroundColor: "var(--blue-400)" }}
        icon="pi pi-check"
        rounded
        aria-label="Filter"
        onClick={() => handleStatusChange("realizado")}
      />
      <Button
        style={{ backgroundColor: "var(--red-400)" }}
        icon="pi pi-times"
        rounded
        severity="danger"
        aria-label="Cancel"
        onClick={() => handleStatusChange("cancelado")}
      />
    </div>
  );
};

export default StatusButton;
