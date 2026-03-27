import AboutCard from "./assets/AboutUs.jsx";
import ZuchiImg from "./assets/zuchi.png";
import JonImg from "./assets/jon.jpg";
function Profile() {
  return(
    <div>
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
    quote="I've hiked Mount Everest! We love cool sights!!!!"/>
    
    
    
    </div>
  )
};

export default Profile;
