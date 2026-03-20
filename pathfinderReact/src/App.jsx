import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import car from "./assets/car.gif";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Carousell from "./assets/Carousell.jsx";   
import kb from "./assets/kagurabachi.jpeg";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li className="background"><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <Carousell img1={car} img2={kb} img3={car} img4={kb} img5={car}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;