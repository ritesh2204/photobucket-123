import React, { useEffect } from "react";
import Layout from "../components/Layout.js";
import "../styles/plugins.min.css";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  /**
   * Runs first time when component is mounted
   * and add the script to the document.
   */
  useEffect(() => {
    // client side rendering function
    const files = [
      "/static/jquery-3.2.1.min.js",
      "/static/plugins.min.js",
      "/static/main.js",
    ];
    for (let file of files) {
      const script = document.createElement("script");
      script.src = file;
      script.async = false;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.append(script);
    }
  });

  return <Layout> {<Component {...pageProps} />}</Layout>;
}
