import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import "keen-slider/keen-slider.min.css"

const App = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}


export default App