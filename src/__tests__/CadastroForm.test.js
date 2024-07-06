import { render, screen } from "@testing-library/react";
import CadastroForm from "../components/CadastroForm";

jest.mock("../components/DatePicker", () => {
  return (props) => (
    <input
      type="date"
      value={props.selected}
      onChange={(e) => props.onDateChange(new Date(e.target.value))}
    />
  );
});

describe("<CadastroForm />", () => {
  it("should render", () => {
    const component = render(<CadastroForm />);
    expect(component).toBeTruthy();
    screen.logTestingPlaygroundURL();
  });
});
