import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 10 * 60 * 1000, // milliseconds
      staleTime: 2 * 60 * 1000, // milliseconds
      refetchInterval: 5 * 60 * 1000, // milliseconds
      // Infinite loading: Specify how to get more data for pagination
      // getFetchMore: (lastPage, allPages) => lastPage.nextPage, // Adjust this based on your API response structure
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>,
);
