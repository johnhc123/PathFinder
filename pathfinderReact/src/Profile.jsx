import AboutCard from "./assets/AboutUs.jsx";
import ZuchiImg from "./assets/zuchi.png";
import JonImg from "./assets/jon.jpg";
import JulianImg from "./assets/julian.png"
import Title from "./assets/Title.jsx";
function Profile() {
  return(
    <div class ="content-evenly grid">
  <Title className="text-4xl font-bold text-center my-8"
  title= "Meet the Team"
  subtitle= "We are a group of three friends who love hiking and exploring the outdoors. We created this app to share our passion for trails and help others discover new adventures. We hope you enjoy using our app as much as we enjoyed creating it!" />
  <br></br>
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
