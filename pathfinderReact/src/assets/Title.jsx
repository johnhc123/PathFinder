function Title({ title , subtitle }) {
  
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full text-center hover:shadow-xl transition-all duration-200">
      <h1 className = "text-2xl font-bold mb-2">{title}</h1>
      <p className="text-gray-600" >{subtitle}</p>
    </div>
  );
}

export default Title; 
