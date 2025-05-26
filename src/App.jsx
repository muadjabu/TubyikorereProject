// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Courses      from "./pages/courses";
import Home         from "./pages/home";
import CreateQuiz   from "./pages/createquiz";
import Login        from "./pages/login";
import Register     from "./pages/register";
import Forgetform   from "./pages/forgetform";
import './i18n';


function App() {
  return (
    <Router>
      <Routes>
         {/* land on Home when visiting “/” */}
+        <Route path="/"        element={<Home />} />
-        <Route path="login"   element={<Login />} />
-        <Route path="courses" element={<Courses />} />
-        <Route path="home"    element={<Home />} />
+        <Route path="/courses" element={<Courses />} />
         <Route path="/create"  element={<CreateQuiz />} />
-        <Route path="register"   element={<Register />} />
-        <Route path="forgetform" element={<Forgetform />} />
 
      </Routes>
    </Router>
  );
}

export default App;
