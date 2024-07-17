import { render, screen, fireEvent, getByRole } from "@testing-library/react";
import TabelaAgendamento from "../components/TabelaAgendamento/TabelaAgendamento";

const agendamentosMock = [
  {
    id: 1,
    name: "Marcos Castro",
    dataNascimento: new Date().toLocaleDateString(),
    dataAgendamento: new Date().toLocaleString(),
    statusAgendamento: "futuro",
  },
  {
    id: 2,
    name: "Keven Leone",
    dataNascimento: new Date().toLocaleDateString(),
    dataAgendamento: new Date().toLocaleString(),
    statusAgendamento: "futuro",
  },
  {
    id: 3,
    name: "Gustavo Poroca",
    dataNascimento: new Date().toLocaleDateString(),
    dataAgendamento: new Date().toLocaleString(),
    statusAgendamento: "futuro",
  },
  {
    id: 4,
    name: "Mateus Castro",
    dataNascimento: new Date().toLocaleDateString(),
    dataAgendamento: new Date().toLocaleString(),
    statusAgendamento: "futuro",
  },
  {
    id: 5,
    name: "Lucas Maciel",
    dataNascimento: new Date().toLocaleDateString(),
    dataAgendamento: new Date().toLocaleString(),
    statusAgendamento: "futuro",
  },
  {
    id: 6,
    name: "Gabriel Poroca",
    dataNascimento: new Date().toLocaleDateString(),
    dataAgendamento: new Date().toLocaleString(),
    statusAgendamento: "futuro",
  },
];

const renderComponent = (agendamentosMock) => {
  return render(
    <TabelaAgendamento agendamentos={agendamentosMock} numEachPage={5} />
  );
};

describe("<TabelaAgendamento />", () => {
  describe("TabelaAgendamento", () => {

    it("should render", () => {
      const component = renderComponent(agendamentosMock);
      expect(component).toBeTruthy();
      screen.logTestingPlaygroundURL();
    });

    it("should appear users", () => {
      renderComponent(agendamentosMock);
      expect(screen.getByText("Marcos Castro")).toBeInTheDocument();
      expect(screen.getByText("Gustavo Poroca")).toBeInTheDocument();
      expect(screen.getByText("Keven Leone")).toBeInTheDocument();
    });

    it("should go to next page", () => {
      renderComponent(agendamentosMock);
      expect(screen.getByText("Marcos Castro")).toBeInTheDocument();
      fireEvent.click(screen.getByRole("button", { name: /next page/i }));
      const nonExistant = screen.queryByText("Marcos Castro");
      expect(nonExistant).toBeNull();
      expect(screen.getByText("Gabriel Poroca")).toBeInTheDocument();
    });

    it("should query the text", () => {
      renderComponent(agendamentosMock);
      expect(screen.getByText("Marcos Castro")).toBeInTheDocument();
      fireEvent.change(screen.getByRole("textbox"), {
        target: { value: "Poroca" },
      });

      const nonExistant = screen.queryByText("Marcos Castro");
      expect(nonExistant).toBeNull();
      expect(screen.getByText("Gustavo Poroca")).toBeInTheDocument();
      expect(screen.getByText("Gabriel Poroca")).toBeInTheDocument();
    });

    it("should not break if there is no agendamentos", () => {
      renderComponent();
      expect(screen.getByText("Data de Nascimento")).toBeInTheDocument();
      const nonExistant = screen.queryByText("Marcos Castro");
      expect(nonExistant).toBeNull();
    });

  });
});
