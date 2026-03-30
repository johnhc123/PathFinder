import AboutCard from "./assets/AboutUs.jsx";
import JonImg from "./assets/jon.jpg";
function Reviews() {
  return(
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Reviews</h1>
    <AboutCard
    picture={JonImg}
    name="Jonathan"
    quote="I love this app so much!"/>
    
    
    </div>
  )
};

export default Reviews;
