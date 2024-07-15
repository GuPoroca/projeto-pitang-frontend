import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import CadastroForm from "../components/Formularios/CadastroForm";
import axios from "axios";

jest.mock('axios');

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

// mock do ToastContext para testes
const mockToastContext = {
  showToast: jest.fn(), // Mock da função showToast
};

jest.mock('../context/ToastContext', () => ({
  useToastContext: () => mockToastContext, // Retorna o mock do contexto
}));

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
    const nameErrorMessage = await screen.findAllByText("Nome tem que ter pelo menos 4 letras");
    expect(nameErrorMessage).toHaveLength(1);
    const dateErrorMessages = await screen.findAllByText("Data inválida");
    expect(dateErrorMessages).toHaveLength(2);
  });

  it("should submit form when all fields are filled", async () => {
    renderComponent();
  
    await act(async () => {
      fireEvent.change(screen.getByLabelText(/nome completo/i), {
        target: { value: "John Doe" },
      });
  
      fireEvent.change(screen.getByLabelText(/data de nascimento/i), {
        target: { value: "2002-07-22" },
      });
  
      fireEvent.change(screen.getByLabelText(/data de agendamento/i), {
        target: { value: "2024-07-30" },
      });
  
      fireEvent.click(screen.getByRole("button", { name: /cadastrar/i }));
    });
  
    await waitFor(() => {
      axios.post.mockResolvedValueOnce({ status: 201 });
      expect(screen.queryByText("String must contain at least 4 character(s)")).toBeNull();
      expect(screen.queryByText("Data inválida")).toBeNull();
    });
  });

  it("should not let put a past date on agendamento", async () => {
    renderComponent();

    await act(async () => {
      
      fireEvent.change(screen.getByLabelText(/data de agendamento/i), {
        target: { value: "2002-07-22" },
      });

      fireEvent.click(screen.getByRole("button", { name: /cadastrar/i }));
    });
    //substituir por alguma forma de como eu enviei os dados do formulário
    const dateErrorMessages = await screen.findAllByText("Data inválida");
    expect(dateErrorMessages).toHaveLength(1);
  })

});
