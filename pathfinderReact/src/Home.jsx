import Carousell from "./assets/Carousell.jsx";   
import joaq1 from "./assets/hike1.png";
import joaq2 from "./assets/hike12.png";
import joaq3 from "./assets/hike13.png";
import joaq4 from "./assets/hike14.png";
import joaq5 from "./assets/hike15.png";


function Home() {
  return (
    <div>
      <h1>Welcome to the Trail App</h1>
      <p>Discover the best trails for hiking, biking, and more!</p>
      <h2>Here is our favorite trail:</h2>
      <Carousell img1={joaq1} img2={joaq2} img3={joaq3} img4={joaq4} img5={joaq5}/>
      <p>Sequoia Bayview Trail in Joaquin Miller Park</p>
    
    </div>
  );
}

export default Home;