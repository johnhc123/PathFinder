import cooltrail from "./assets/cooltrail.jpg";
import "react-multi-carousel/lib/styles.css";
import Carousell from "./assets/Carousell";

function BayT() {
  return <div>  <h1>Bay Trails Page</h1>   <p>Different trails to explore in the Bay Area!</p>    <Carousell img1={cooltrail} img2={cooltrail} img3={cooltrail} img4={cooltrail} img5={cooltrail}/>
</div>;
}

export default BayT;
