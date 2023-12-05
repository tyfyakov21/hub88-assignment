import { css } from "@emotion/css";
import { useState } from "react";
import { BounceLoader } from "react-spinners";
import { Header } from "../components/Header";
import { Table } from "../components/Table";
import { useCountries } from "../hooks";

export type Country = {
  name: string;
  code: string;
};

export const MainPage = () => {
  const [filterValue, setFilterValue] = useState<string | undefined>();

  const { data, isLoading } = useCountries(filterValue);

  const countries = data?.countries as Country[];

  const applyFilter = (value?: string) => {
    setFilterValue(value);
  };

  const renderComponent = () => {
    if (isLoading) {
      return (
        <BounceLoader
          color="#000000"
          className={styles.loadingContainer}
          data-testid="loader"
        />
      );
    } else if (data?.countries.length === 0) {
      return <div className={styles.emptyView}>No countries matching</div>;
    } else {
      return <Table data={countries} />;
    }
  };

  return (
    <div className={styles.container}>
      <Header applyFilter={applyFilter} />
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
  loadingContainer: css`
    display: "flex";
    justify-content: "center";
    align-self: center;
    width: "100%";
    height: "100%";
  `,
  emptyView: css`
    margin-top: 20px;
    justify-content: "center";
    align-self: center;
  `,
};
