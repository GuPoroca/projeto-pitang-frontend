import DatePicker from "../components/DatePicker";
import { render, screen } from "@testing-library/react";

describe("<DatePicker />", () => {
  it("should render", () => {
    const component = render(<DatePicker agendamento={true} />);
    expect(component).toBeTruthy();
    screen.logTestingPlaygroundURL();
  });
});
