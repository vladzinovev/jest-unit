/* import { useState, useEffect } from "react";

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

export default App;
 */

import { BrowserRouter, Routes,Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';

const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}