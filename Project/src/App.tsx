import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Buy from "./components/linkto/buy";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/buy" element={<Buy />} />
      </Routes>
    </Router>
  );
}

export default App;
