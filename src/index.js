import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin/Admin";
import HomePage from "./Admin/HomePage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="*" element={<Admin />} />
      <Route path="Home" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);
