import car from "./car.gif";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
            superLargeDesktop: {
             breakpoint: { max: 4000, min: 3000 },
             items: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
            };

function Carousell({img1, img2, img3, img4, img5}) {
    return (
        <div className=" bg-green-100 ">
            
<Carousel responsive={responsive} itemClass="px-1">
  <div><img src={img1} className="w-80 h-80 object-cover rounded-lg"/></div>
  <div><img src={img2} className="w-80 h-80 object-cover rounded-lg"/></div>
  <div><img src={img3} className="w-80 h-80 object-cover rounded-lg"/></div>
  <div><img src={img4} className="w-80 h-80 object-cover rounded-lg"/></div>
    <div><img src={img5} className="w-80 h-80 object-cover rounded-lg"/></div>




</Carousel>;
        </div>
    );
}

export default Carousell;