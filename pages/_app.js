import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import "keen-slider/keen-slider.min.css";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import { persistor, store } from "@/store";
import { Provider as StoreProvider } from "react-redux";



const App = ({ Component, pageProps }) => {

  const queryClient = new QueryClient();

  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <StoreProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
            <ToastContainer
              style={{ zIndex: 999999999 }}
              hideProgressBar={false}
            />
          </PersistGate>
        </StoreProvider>
      </QueryClientProvider>
    </NextUIProvider>
  );
};

export default App;
