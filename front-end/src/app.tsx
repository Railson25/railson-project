import { useBootstrapAuth } from "./hooks/useBootstrapAuth";
import Router from "./router";

export function App() {
  useBootstrapAuth();

  return <Router />;
}
