import { StrictMode, useState } from "react";
import * as ReactDOMClient from "react-dom/client";
import SitoModal from "./App";
import { jsx as _jsx } from "react/jsx-runtime";
const container = document.getElementById("root"); // Create a root.

const root = ReactDOMClient.createRoot(container);

const App = () => {
  const [show, setShow] = useState(true);
  return /*#__PURE__*/_jsx(SitoModal, {
    visible: show,
    onClose: () => setShow(false),
    children: "Hola Mundo"
  });
}; // Initial render: Render an element to the root.


root.render( /*#__PURE__*/_jsx(StrictMode, {
  children: /*#__PURE__*/_jsx(App, {})
}));