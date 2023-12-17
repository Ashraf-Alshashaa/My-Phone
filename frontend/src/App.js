import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Brand from "./pages/brand";
import Mobile from "./pages/mobile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/brand-page/:brand" element={<Brand />}></Route>
        <Route path="/mobile" element={<Mobile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
