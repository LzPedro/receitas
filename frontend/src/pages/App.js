import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./main/App2";
import Login from "./login/App3";
import React from 'react';
import Recipe from "./recipe/Recipe"

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Main </Link>
        <Link to="/login"> Login </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </Router>
  );
}

export default App;