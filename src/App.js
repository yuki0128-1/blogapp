import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Ho from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/blogapp" element={<Ho />}></Route>
        <Route
          path="/createpost"
          element={<CreatePost isAuth={isAuth} />}
        ></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route
          path="/logout"
          element={<Logout setIsAuth={setIsAuth} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
