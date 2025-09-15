import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const App = () => <h1>Hello, React!</h1>;

createRoot(document.getElementById("root")).render(<App />);
