import { useState } from "react";
function Profile({ name, title, blurb, picture, quote }) {
  const [showMore, setShowMore] = useState(false);

  return (
    

    
    <div className="bg-(white) rounded-3xl shadow-md p-6 w-72 text-center hover:shadow-xl transition-all duration-200 outline-[5]">
  
        <div>
          

    </div>
      <h3 className="text-xl font-bold text-gray-800">
     
<img class="w-25 h-25 p-1 rounded-full ring-2 ring-default content-center mx-auto" src={picture} alt="Bordered avatar"/>

        {name}
      </h3>
      <p>{title}</p>    
      <p>{blurb}</p>
      <p>"{quote}"</p>
      
    </div>
  );
}

export default Profile;