import { useState } from "react";
function Card({title,description }) {
  const [showMore, setShowMore] = useState(false);

  return (
    

    
    <div className="bg-(white) rounded-3xl shadow-md p-6 w-72 text-center hover:shadow-xl transition-all duration-200 outline-[5]">
  
        <div>
          

    </div>
      <p>{title}</p>    
      <p>{description}</p>      
    </div>
  );
}

export default Card;