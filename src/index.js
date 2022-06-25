import { StrictMode, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

import SitoModal from "./App";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <SitoModal visible={show} onClose={() => setShow(false)}>
      Hola Mundo
    </SitoModal>
  );
};

// Initial render: Render an element to the root.
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
