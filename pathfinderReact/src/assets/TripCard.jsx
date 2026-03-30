function TripCard({ title, date, location, activities, duration, difficulty }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md hover:shadow-xl transition-all duration-200">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="space-y-2 text-gray-600">
        <p><span className="font-semibold">Date:</span> {date}</p>
        <p><span className="font-semibold">Location:</span> {location}</p>
        <p><span className="font-semibold">Duration:</span> {duration}</p>
        <p><span className="font-semibold">Difficulty:</span>
          <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
            difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
            difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {difficulty}
          </span>
        </p>
        <div>
          <span className="font-semibold">Activities:</span>
          <ul className="list-disc list-inside mt-1">
            {activities.map((activity, index) => (
              <li key={index} className="text-sm">{activity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TripCard;