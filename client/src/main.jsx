import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store.js";
import { persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 15 secs for cache time
      cacheTime: 15 * 1000,
      staleTime: 15 * 1000,
      retry: 3,
      // refetchInterval: 5 * 60 * 1000, // milliseconds
      // Infinite loading: Specify how to get more data for pagination
      // getFetchMore: (lastPage, allPages) => lastPage.nextPage, // Adjust this based on your API response structure
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
);
