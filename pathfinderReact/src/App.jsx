import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ShoeImage from "./assets/Shoe.jpg"
import kagurabachi from "./assets/kagurabachi.jpeg";
import Carousell from "./assets/Carousell.jsx";   
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
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
<img src={ShoeImage}/>
      <Carousell />
      <img src={kagurabachi}  />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;