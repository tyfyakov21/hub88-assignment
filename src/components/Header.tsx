import { css } from "@emotion/css";
import { useState } from "react";

interface Props {
  inputValue?: string;
  applyFilter: (value?: string) => void;
}

export const Header = (props: Props) => {
  const { applyFilter } = props;

  const [inputValue, setInputValue] = useState<string | undefined>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFilterClick = () => {
    applyFilter(inputValue);
  };

  return (
    <div className={styles.headerContainer} data-testid="main_page_header">
      <input
        type="text"
        id="country_code"
        placeholder="Country code"
        onChange={handleInputChange}
        defaultValue={inputValue}
        data-testid="filter_input"
      />
      <button
        onClick={handleFilterClick}
        data-testid="filter_buton"
        className={styles.filterButton}
      >
        Filter
      </button>
    </div>
  );
};

const styles = {
  headerContainer: css`
    margin-top: 20px;
    display: "flex";
    justify-content: "center";
    align-self: center;
  `,
  filterButton: css`
    margin-left: 10px;
  `,
};
