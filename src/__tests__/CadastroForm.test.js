import { render, screen, fireEvent, act } from "@testing-library/react";
import CadastroForm from "../components/Formularios/CadastroForm";

jest.mock("../components/Formularios/DatePicker", () => {
  return (props) => (
    <input
      type="date"
      id={props.id}
      aria-label={props["aria-label"]}
      value={props.selected}
      onChange={(e) => props.onDateChange(new Date(e.target.value))}
    />
  );
});

const renderComponent = () => {
  return render(<CadastroForm />);
};

describe("CadastroForm", () => {
  it("should render", () => {
    const component = renderComponent();
    expect(component).toBeTruthy();
    screen.logTestingPlaygroundURL();
  });

  it("should display validation errors when fields are empty", async () => {
    renderComponent();

    const submitButton = screen.getByRole("button", { name: /cadastrar/i });
    fireEvent.click(submitButton);

    const errorMessages = await screen.findAllByText(/campo obrigatório/i);
    expect(errorMessages).toHaveLength(3);
  });

  it("should submit form when all fields are filled", async () => {
    renderComponent();

    await act(async () => {
      fireEvent.change(screen.getByLabelText(/nome completo/i), {
        target: { value: "John Doe" },
      });

      fireEvent.change(screen.getByLabelText(/data de nascimento/i), {
        target: { value: "2000-01-01" },
      });

      fireEvent.change(screen.getByLabelText(/data de agendamento/i), {
        target: { value: "2024-12-31" },
      });

      fireEvent.click(screen.getByRole("button", { name: /cadastrar/i }));
    });
    //substituir por alguma forma de como eu enviei os dados do formulário
    const errorMessages = await screen.queryAllByText(/campo obrigatório/i);
    expect(errorMessages).toHaveLength(0);
  });
});
