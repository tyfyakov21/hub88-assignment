import { css } from "@emotion/css";

export const fallbackRender = ({
  error,
  resetErrorBoundary,
}: {
  error: any;
  resetErrorBoundary: any;
}) => {
  return (
    <div className={styles.container}>
      <p>{`Something went wrong.`}</p>
      <button onClick={resetErrorBoundary}>Reset</button>
    </div>
  );
};

const styles = {
  container: css`
    width: "100%";
    height: "100%";
    display: "flex";
    flex-direction: "column";
    align-items: "center";
    background-color: "red";
  `,
};
