import { useState } from "react";
function Card({ name, title, blurb, picture, quote }) {
  const [showMore, setShowMore] = useState(false);

  return (
    
    <div className="bg-white rounded-2xl shadow-md p-6 w-72 text-center hover:shadow-xl transition-all duration-200">
        <div>
    </div>
      <h3 className="text-xl font-bold text-gray-800">
        <p>{picture}</p>
        {name}
      </h3>
      <p>{title}</p>    
      <p>{blurb}</p>
      <p>"{quote}"</p>
      
    </div>
  );
}

export default Card;