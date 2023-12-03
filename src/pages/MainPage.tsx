import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { useState } from "react";
import { GET_COUNTRIES } from "../queries";
import { Table } from "./Table";

export type Country = {
  name: string;
  code: string;
};

export const MainPage = () => {
  const [inputValue, setInputValue] = useState<string | undefined>();
  const [filterValue, setFilterValue] = useState<string | undefined>();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["countries", filterValue],
    queryFn: async () =>
      request(`https://countries.trevorblades.com/`, GET_COUNTRIES(), {
        filter: inputValue ?? "",
      }),
    retry: 3,
  });

  if (isLoading) {
    return <></>;
  }

  const countries = data?.countries as Country[];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFilterClick = () => {
    setFilterValue(inputValue);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          id="country_code"
          placeholder="Country code"
          onChange={handleInputChange}
          defaultValue={inputValue}
        />
        <button onClick={handleFilterClick}>Filter</button>
      </div>
      <Table data={countries} />
    </div>
  );
};
