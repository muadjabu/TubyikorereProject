// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import ForgetForm from "./components/ForgetForm"
import Aboutus from "./components/Aboutus";
import './i18n';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ForgetForm" element={<ForgetForm />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        {/* No need for /courses route separately if it's included inside Home */}
      </Routes>
    </Router>
  );
}

export default App;
