import AboutCard from "./assets/AboutUs.jsx";
import ZuchiImg from "./assets/zuchi.png";
import JonImg from "./assets/jon.jpg";
import JulianImg from "./assets/julian.png"
function Profile() {
  return(
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Our Profile!</h1>
    <div className="grid grid-cols-3 gap-2 place-items-center">
    <AboutCard
    name="Zuchi"
    quote="We are the coders!!!!"
    picture={ZuchiImg}/>
    
    
     <AboutCard
    name="Jonathan"
    quote="We love hiking the coolest trails YES!"
    picture={JonImg}/>

     <AboutCard
    name="Julian"
    quote="I've hiked Mount Everest! We love cool sights!!!!"
    picture={JulianImg}/>
    
    
    
    </div>
    </div>
  )
};

export default Profile;
