// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Forgetform from "./pages/forgetform";
import './i18n';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetform" element={<Forgetform />} />
        {/* No need for /courses route separately if it's included inside Home */}
      </Routes>
    </Router>
  );
}

export default App;
