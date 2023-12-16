import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/brand-page/:brand" element={<h1>Brand</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
