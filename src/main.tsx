import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import r2wc from "@r2wc/react-to-web-component";
import "./main.css";
import "./index.css";
import { worker } from "./mocks/browser";

export const WebReminders = r2wc(App);

if (process.env.NODE_ENV === "development") {
  worker.start();
}

if (import.meta.env.MODE === "production") {
  customElements.define("web-reminders", WebReminders);
} else {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
