function TrailCard({ name, location, difficulty, length, description, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-200">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{location}</p>
      <div className="flex justify-between items-center mb-3">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
          difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {difficulty}
        </span>
        <span className="text-sm text-gray-500">{length}</span>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default TrailCard;