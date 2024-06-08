import "./global.css";

import { createRoot } from "react-dom/client";
import { App } from "./app";
import { StyleSheet } from "./box";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <>
      <StyleSheet />
      <App />
    </>
  );
}
