/* import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");

  const onClick = () => setToggle((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  return (
    <div>
      <h1 data-testid="value-elem">{value}</h1>
      {toggle === true && <div data-testid="toggle-elem">toggle</div>}
      {data && <div style={{ color: "red" }}>data</div>}
      <h1>Hello world</h1>
      <button data-testid="toggle-btn" onClick={onClick}>
        click me
      </button>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="input value....."
      />
    </div>
  );
};

export default App; */
 
import { Routes,Route, Link } from "react-router-dom";
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import React from "react";
import ErrorPage from "./pages/ErrorPage";
import Users from "./components/users/Users";
import UserDetailsPage from "./pages/UserDetailsPage";

const App=()=>{
  return(
    <div>
      <Link to="/" data-testid='main-link'>main</Link>
      <Link to="/about" data-testid='about-link'>about</Link>
      <Link to="/users" data-testid='users-link'>users</Link>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<UserDetailsPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}
export default App; 