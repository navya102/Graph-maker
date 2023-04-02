import logo from "./logo.svg";
import "./App.css";
import MyGraph from "./components/mygraph";
import Values from "./components/values";
import EnterCoordinates from "./components/enterCoordinates";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Values />}></Route>
          <Route
            path="/enterCoordinates"
            element={<EnterCoordinates />}
          ></Route>
          <Route path="/graph" element={<MyGraph />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
