import ScrollToTop from "./base-components/ScrollToTop";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stores/store";

import "./assets/css/app.css";
import { QueryProvider } from "./providers/query-provider";
import { App } from "./app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      <ScrollToTop />
    </BrowserRouter>
  </QueryProvider>
);
