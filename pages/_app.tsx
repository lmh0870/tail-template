import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("Test");
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <div className="font-noto-sans">
        <Component {...pageProps} />
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" />
    </SWRConfig>
  );
}

export default MyApp;
