import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="App">home</div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
