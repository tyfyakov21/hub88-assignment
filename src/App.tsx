import { css } from "@emotion/css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import { fallbackRender } from "./pages/ErrorView";
import { MainPage } from "./pages/MainPage";

const queryClient = new QueryClient();

function App() {
  return (
    <div className={styles.container}>
      <ErrorBoundary fallbackRender={fallbackRender}>
        <QueryClientProvider client={queryClient}>
          <MainPage />
        </QueryClientProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
  `,
};
