import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Footer from "./Footer";

import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <App />
      <Footer />
    </div>
  </StrictMode>
);
