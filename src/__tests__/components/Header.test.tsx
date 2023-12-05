import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../../components/Header";

describe(`Header`, () => {
  it(`should render input field and button`, async () => {
    render(<Header applyFilter={() => {}} />);

    expect(screen.getByTestId("filter_input")).toBeInTheDocument();
    expect(screen.getByTestId("filter_buton")).toBeInTheDocument();
  });

  it(`should return correct input value on button click`, () => {
    let filterValue;
    render(
      <Header
        applyFilter={(value) => {
          filterValue = value;
        }}
      />
    );

    const filterInput: HTMLInputElement = screen.getByTestId("filter_input");
    fireEvent.change(filterInput, { target: { value: "EE" } });
    fireEvent.click(screen.getByTestId("filter_buton"));

    expect(filterValue).toEqual("EE");
  });
});
