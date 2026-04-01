import Title from "./assets/Title.jsx";
import TrailCard from "./assets/TrailCard.jsx";
import Carousell from "./assets/Carousell";
import coast from "./assets/coast.jpg";
import cooltrail from "./assets/cooltrail.jpg";
import path from "./assets/path.jpg";
import hike1 from "./assets/hike1.png";
import hike2 from "./assets/hike12.png";
import hike3 from "./assets/hike13.png";

function BayT() {
  const bayTrails = [
    {
      name: "Sequoia Bayview Trail",
      location: "Joaquin Miller Park, Oakland",
      difficulty: "Easy",
      length: "2.5 miles",
      description: "Scenic trail with bay views, redwoods, and seasonal wildflowers. Perfect for families.",
      image: coast
    },
    {
      name: "Inspiration Point Trail",
      location: "Tilden Regional Park, Berkeley",
      difficulty: "Moderate",
      length: "3.2 miles round trip",
      description: "Steep climb to panoramic views of the entire Bay Area and San Francisco skyline.",
      image: cooltrail
    },
    {
      name: "Stream Trail",
      location: "Point Reyes National Seashore",
      difficulty: "Easy",
      length: "1.5 miles",
      description: "Peaceful trail along a seasonal stream through coastal prairie and forest.",
      image: path
    },
    {
      name: "Steep Ravine Trail",
      location: "Mount Tamalpais, Marin",
      difficulty: "Moderate",
      length: "2.8 miles round trip",
      description: "Challenging hike through redwoods to a cascading waterfall.",
      image: hike1
    },
    {
      name: "Lost Trail",
      location: "Angel Island State Park",
      difficulty: "Easy",
      length: "1.8 miles",
      description: "Easy loop trail around the island with views of San Francisco and the bay.",
      image: hike2
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <Title title="Bay Area Trails" subtitle="Explore the diverse hiking spots around the San Francisco Bay" />

      <div className="max-w-6xl mx-auto space-y-8 p-8">
          <Title title="Bay Area Highlights" subtitle="Iconic trails and hidden gems" />
          <Carousell img1={coast} img2={cooltrail} img3={path} img4={hike1} img5={hike2} />

          <Title title="Popular Trails" subtitle="From urban parks to wilderness areas" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bayTrails.map((trail, index) => (
              <TrailCard key={index} {...trail} />
            ))}
          </div>


          <Title title="Bay Area Hiking Tips" subtitle="Navigate the unique terrain and weather" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Microclimates</h3>
              <p className="text-gray-600">The Bay Area has diverse microclimates. Coastal areas are cooler and foggier than inland regions.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Transportation</h3>
              <p className="text-gray-600">Many trails are accessible by BART, buses, or ferries. Check schedules for return trips.</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default BayT;
