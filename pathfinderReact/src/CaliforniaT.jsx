import car from "./assets/car.gif";
import "react-multi-carousel/lib/styles.css";
import Carousell from "./assets/Carousell";

function CaliforniaT() {
  return <div>  <h1>California Trails Page</h1>  
  <p>Different trails to explore in California!</p>
    <Carousell img1={car} img2={car} img3={car} img4={car} img5={car}/>
</div>;}

export default CaliforniaT;
