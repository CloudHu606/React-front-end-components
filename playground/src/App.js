import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "../src/components/layout/navBar";
import Home from "../src/components/pages/home";
import SingleC from "../src/components/pages/singleC";
import Projects from "../src/components/pages/projects";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Navbar />
      <div className="container">
        <h1>Cloud Play Ground</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlec" element={<SingleC />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
