import { css } from "@emotion/css";
import { useState } from "react";
import { BounceLoader } from "react-spinners";
import { Table } from "../components/Table";
import { useCountries } from "../hooks";

export type Country = {
  name: string;
  code: string;
};

export const MainPage = () => {
  const [inputValue, setInputValue] = useState<string | undefined>();
  const [filterValue, setFilterValue] = useState<string | undefined>();

  const { data, isLoading } = useCountries(filterValue);

  const countries = data?.countries as Country[];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFilterClick = () => {
    setFilterValue(inputValue);
  };

  const renderComponent = () => {
    if (isLoading) {
      return (
        <BounceLoader color="#000000" className={styles.loadingContainer} />
      );
    } else if (data?.countries.length === 0) {
      return <>No countries matching</>;
    } else {
      return <Table data={countries} />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer} data-testid="main_page_header">
        <input
          type="text"
          id="country_code"
          placeholder="Country code"
          onChange={handleInputChange}
          defaultValue={inputValue}
          data-testid="filter_input"
        />
        <button onClick={handleFilterClick} data-testid="filter_buton">
          Filter
        </button>
      </div>
      {renderComponent()}
    </div>
  );
};

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    width: "100%";
    height: "100%";
  `,
  headerContainer: css`
    margin-top: 20px;
    display: "flex";
    justify-content: "center";
    align-self: center;
  `,
  loadingContainer: css`
    display: "flex";
    justify-content: "center";
    align-self: center;
    width: "100%";
    height: "100%";
  `,
};
