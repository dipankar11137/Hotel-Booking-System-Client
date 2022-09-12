import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Page/Home/Home";
import Ratting from "./Components/Page/Home/Ratting";
import Login from "./Components/Page/Login/Login";
import SignUp from "./Components/Page/Login/SignUp";
import Navbar from "./Components/Share/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Ratting /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
