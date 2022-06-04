import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </NextUIProvider>
  );
}

export default MyApp;

