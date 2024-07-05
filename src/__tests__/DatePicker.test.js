/* globals describe, expect, it */
import { render, screen } from "@testing-library/react";
import DatePicker from "../components/DatePicker";

describe("<DatePicker />", () => {
  it("should contain teste", () => {
    render(
      <DatePicker
        agendamento={true}
      />
    );
    const title = screen.getByRole("heading", { name: "teste" });
    screen.logTestingPlaygroundURL();
    expect(title).toBeInTheDocument();
  });
});
