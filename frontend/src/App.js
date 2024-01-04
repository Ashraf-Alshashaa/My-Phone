import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Brand from "./pages/brand";
import Mobile from "./pages/mobile";
import AboutUs from "./pages/about-us";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/brand-page/:brand" element={<Brand />}></Route>
        <Route path="/mobile" element={<Mobile />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
