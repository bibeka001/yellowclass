import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbarr from "./Components/Navbarr";
import Home from "./Components/Home";
import Feed from "./Components/Feed";
import Explore from "./Components/Explore";
import Menu from "./Components/Menu";
import CompA from "./Interview/CompA";
function App() {
  return (
    <div className="App">
      <CompA />
    </div>
  );
}

export default App;
