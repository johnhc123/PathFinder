import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Profile from "./Profile.jsx";
import "./App.css"
import BayT from "./BayT.jsx";
import CaliforniaT from "./CaliforniaT.jsx";
import UsaT from "./UsaT.jsx";
import Reviews from "./Reviews.jsx";
import Guide from "./Guide.jsx";
import TripPlanner from "./TripPlanner.jsx";
import Dropdown from "./assets/Dropdown.jsx";
import StarFunction from "./assets/Stars.jsx"
import Title from "./assets/title.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li className="background"><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/bayt">Bay T</Link></li>
          <li><Link to="/californiat">California T</Link></li>
          <li><Link to="/usat">Usa T</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/guide">Guide</Link></li>
          <li><Link to="/tripplanner">Trip Planner</Link></li>

        </ul>
        
      </nav>
<Dropdown
          title="Trending Trails"
          trail1="Sinking Mud Trail"
          trail2="Eagle's Trek Trail"
          trail3="Fisherman's War Trail"/>
          <br></br>
          <StarFunction/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bayt" element={<BayT />} />
        <Route path="/californiat" element={<CaliforniaT />} />
        <Route path="/usat" element={<UsaT />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/tripplanner" element={<TripPlanner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;