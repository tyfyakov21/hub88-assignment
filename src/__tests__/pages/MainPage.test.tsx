import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import { MainPage } from "../../pages/MainPage";

describe(`MainPage`, () => {
  const queryClient = new QueryClient();

  it(`should render the header`, async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MainPage />
      </QueryClientProvider>
    );

    await screen.findByTestId("main_page_header");
    expect(screen.getByText("Filter")).toBeInTheDocument();
  });

  it(`should render the table`, async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MainPage />
      </QueryClientProvider>
    );

    await screen.findByTestId("main_page_table");
    expect(screen.getByText("Country Name")).toBeInTheDocument();
    expect(screen.getByText("Country Code")).toBeInTheDocument();
  });

  it(`should render correcty list of conuntries when filter applied`, async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MainPage />
      </QueryClientProvider>
    );

    const filterInput: HTMLInputElement = screen.getByTestId("filter_input");
    fireEvent.change(filterInput, { target: { value: "EE" } });
    expect(filterInput.value).toBe("EE");

    fireEvent.click(screen.getByTestId("filter_buton"));

    await new Promise((r) => setTimeout(r, 2000));

    expect(screen.getByText("Estonia")).toBeInTheDocument();
    expect(screen.queryByText("Latvia")).not.toBeInTheDocument();
  }, 70000);
});
