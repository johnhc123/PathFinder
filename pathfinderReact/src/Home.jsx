import Carousell from "./assets/Carousell.jsx";   
import joaq1 from "./assets/hike1.png";
import joaq2 from "./assets/hike12.png";
import joaq3 from "./assets/hike13.png";
import joaq4 from "./assets/hike14.png";
import joaq5 from "./assets/hike15.png";
import Title from "./assets/Title.jsx";


function Home() {
  return (
    <div>
      <Title title="Welcome to the Trail App" subtitle="Discover the best trails for hiking, biking, and more!" />
      <br></br>
      <Title title = "Featured Trail: Sequoia Bayview Trail" subtitle="Experience breathtaking views of the San Francisco Bay and the city skyline on this scenic trail in Joaquin Miller Park." />
      <br></br>
      <Carousell img1={joaq1} img2={joaq2} img3={joaq3} img4={joaq4} img5={joaq5}/>

    
    </div>
  );
}

export default Home;