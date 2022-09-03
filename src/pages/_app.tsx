import "../styles/globals.css";
import type { AppProps } from "next/app";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col my-0 mx-auto items-center max-w-screen-lg">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
