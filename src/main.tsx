import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App.tsx";
import "./index.css";
import r2wc from "@r2wc/react-to-web-component";

export const WebGreeting = r2wc(App);

if (import.meta.env.MODE === "production") {
  customElements.define("web-greeting", WebGreeting);
} else {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
