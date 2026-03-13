import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
<<<<<<< HEAD
import ShoeImage from "./assets/Shoe.jpg"
=======
import kagurabachi from "./assets/kagurabachi.jpeg";
>>>>>>> Zuchi-img

function App() {
  return (
    <BrowserRouter>
    
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
<<<<<<< HEAD
<img src={ShoeImage}/>
=======

      <img src={kagurabachi}  />

>>>>>>> Zuchi-img
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

