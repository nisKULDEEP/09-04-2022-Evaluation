import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Details from "./Components/Details";
import Create from "./Components/Create";
import Edits from "./Components/Edits";
import Employees from "./Components/Employees";

// import Register from "./Components/Register";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/:id" element={<Details />} />
        <Route path="/employees/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employees/:id/edit" element={<Edits />} />
      </Routes>
    </div>
  );
}

export default App;
