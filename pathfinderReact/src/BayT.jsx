import car from "./assets/car.gif";
import "react-multi-carousel/lib/styles.css";
import Carousell from "./assets/Carousell";

function BayT() {
  return <div>  <h1>Bay Trails Page</h1>   <p>Different trails to explore in the Bay Area!</p>    <Carousell img1={car} img2={car} img3={car} img4={car} img5={car}/>
</div>;
}

export default BayT;
