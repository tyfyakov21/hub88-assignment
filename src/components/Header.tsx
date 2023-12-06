import { css } from "@emotion/css";
import { useState } from "react";
import { ReactComponent as CrossIcon } from "../assets/shape.svg";

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
      <div className={styles.inputContainer}>
        <input
          type="text"
          id="country_code"
          placeholder="Country code"
          data-testid="filter_input"
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleFilterClick();
            }
          }}
          value={inputValue}
        />
        <button
          onClick={() => {
            setInputValue("");
          }}
        >
          <CrossIcon />
        </button>
      </div>
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
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    align-self: center;
  `,
  filterButton: css`
    margin-left: 10px;
    height: 25px;
    margin-top: 6px;
  `,
  inputContainer: css`
    position: relative;
    display: flex;
    flex-direction: row;

    & input {
      width: 70%;
      height: 30px;
      padding-right: 60px;
      display: flex;
    }

    & button {
      position: absolute;
      right: 3px;
      border: 0px;
      background-color: white;
      display: flex;
      align-self: center;
    }
  `,
};
