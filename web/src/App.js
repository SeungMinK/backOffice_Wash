import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";

function App() {
  return (
    <div className="root" id="root">
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
