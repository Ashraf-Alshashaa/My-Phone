import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Brand from "./pages/brand/index.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/brand-page/:brand" element={<Brand />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
