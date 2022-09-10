import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Page/Home/Home";
import Ratting from "./Components/Page/Home/Ratting";
import Navbar from "./Components/Share/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Ratting />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
