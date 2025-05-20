import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";
import Footer from "./Footer";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div>
        <h1>Weather App</h1>
        <Search />
      </div>
      <Footer />
    </div>
  </StrictMode>
);
