import Carousell from "./assets/Carousell.jsx";   
import joaq from "./assets/hike1.png";

function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Welcome to the Trail App</h1>
      <p>Discover the best trails for hiking, biking, and more!</p>
      <h2>Here is our favorite trail:</h2>
      <Carousell img1={joaq} img2={joaq} img3={joaq} img4={joaq} img5={joaq}/>
      <p>Sequoia Bayview Trail in Joaquin Miller Park</p>
    
    </div>
  );
}

export default Home;