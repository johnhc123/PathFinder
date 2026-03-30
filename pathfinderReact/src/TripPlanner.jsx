import Card from "./assets/Card.jsx";
import TrailForm from "./assets/TrailSelectform.jsx";
import TripCard from "./assets/TripCard.jsx";
import Title from "./assets/Title.jsx";

function TripPlanner() {
  const sampleTrips = [
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
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Title title="Trip Planner" subtitle="Plan your perfect outdoor adventure" />

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Introduction */}
        <Card
          title="Create Your Dream Trip"
          description="Use our trip planner to customize itineraries, select trails, and organize your outdoor adventures!"
        />

        {/* Trip Form */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Plan Your Trip</h2>
          <TrailForm />
        </div>

        {/* Sample Trips */}
        <section>
          <Title title="Popular Trip Ideas" subtitle="Get inspired by these curated adventures" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleTrips.map((trip, index) => (
              <TripCard key={index} {...trip} />
            ))}
          </div>
        </section>

        {/* Trip Tips */}
        <section>
          <Title title="Planning Tips" subtitle="Make the most of your trip" />
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              title="Weather Considerations"
              description="Check forecasts and pack layers. Weather can be unpredictable in outdoor environments."
            />
            <Card
              title="Group Planning"
              description="Coordinate with your group, share responsibilities, and establish meeting points."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default TripPlanner;
