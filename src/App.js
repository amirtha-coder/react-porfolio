import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/Contact Me";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { CV } from "./components/CV";

export const App = () => {
  const pages = [
    { label: "About Me", path: "/about-me" },
    { label: "Projects", path: "/projects" },
    { label: "Contact Me", path: "/contact-me" },
    { label: "CV", path: "/cv" },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header pages={pages} />} />
        <Route path="/about-me" element={<AboutMe pages={pages} />} />
        <Route path="/projects" element={<Projects pages={pages} />} />
        <Route path="/contact-me" element={<ContactMe pages={pages} />} />
        <Route path="/cv" element={<CV pages={pages} />} />
      </Routes>
    </BrowserRouter>
  );
};
