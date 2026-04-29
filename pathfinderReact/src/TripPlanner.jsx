import Card from "./assets/Card.jsx";
import TrailForm from "./assets/TrailSelectform.jsx";
import TripCard from "./assets/TripCard.jsx";
import Title from "./assets/Title.jsx";
import { useState } from "react";

function TripPlanner() {
  const [trips, setTrips] = useState([
    {
      title: "Coastal Adventure",
      date: "March 15, 2026",
      location: "Big Sur, CA",
      duration: "3 days",
      difficulty: "Moderate",
      activities: ["Hiking", "Camping", "Photography", "Beach exploration"]
    },
    {
      title: "Mountain Summit",
      date: "April 2, 2026",
      location: "Sierra Nevada, CA",
      duration: "5 days",
      difficulty: "Difficult",
      activities: ["Backpacking", "Rock climbing", "Wildlife viewing", "Stargazing"]
    },
    {
      title: "Forest Retreat",
      date: "May 10, 2026",
      location: "Redwood National Park, CA",
      duration: "2 days",
      difficulty: "Easy",
      activities: ["Nature walks", "Bird watching", "Picnicking", "Tree climbing"]
    }
  ]);

  const addTrip = (newTrip) => {
    setTrips([newTrip, ...trips]);
  };

  const deleteTrip = (index) => {
    setTrips(trips.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen p-8">
      <Title title="Trip Planner" subtitle="Plan your perfect outdoor adventure" />
      <div className="flex justify-center m-8">
        
        <Card
          title="Create Your Dream Trip"
          description="Use our trip planner to customize itineraries, select trails, and organize your outdoor adventures!"
        />
        </div>
              <div className="max-w-6xl mx-auto space-y-8 p-8">

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Plan Your Trip</h2>
          <TrailForm onAddTrip={addTrip} />
        </div>

          <Title title="Your Trips" subtitle="Manage your planned adventures" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.length === 0 ? (
              <p className="text-gray-500 col-span-full text-center">No trips yet. Add one above!</p>
            ) : (
              trips.map((trip, index) => (
                <TripCard key={index} {...trip} onDelete={() => deleteTrip(index)} />
              ))
            )}
          </div>

          <Title title="Planning Tips" subtitle="Make the most of your trip" />
          <div className="grid grid-cols-2 place-items-center p-8">
            <Card
              title="Weather Considerations"
              description="Check forecasts and pack layers. Weather can be unpredictable in outdoor environments."
            />
            <Card
              title="Group Planning"
              description="Coordinate with your group, share responsibilities, and establish meeting points."
            />
          </div>
      </div>
    </div>
  );
}

export default TripPlanner;
