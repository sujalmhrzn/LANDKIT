import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Buy from "./components/linkto/buy";
import Hero from "./components/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/buy" element={<Buy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
