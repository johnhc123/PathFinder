import Title from "./assets/Title.jsx";
import TrailCard from "./assets/TrailCard.jsx";
import Carousell from "./assets/Carousell";
import AppTrail from "./assets/AppTrail.jpg";
import PacificTrail from "./assets/Pacific.jpg";
import JohnTrail from "./assets/JohnTrail.jpg";
import AngelTrail from "./assets/AngelTrail.jpg";
import HalfDome from "./assets/HalfDome.jpg"

function UsaT() {
  const usaTrails = [
    {
      name: "Appalachian Trail",
      location: "East Coast, USA",
      difficulty: "Difficult",
      length: "2,190 miles",
      description: "One of the longest continuously marked footpaths in the world, stretching from Georgia to Maine.",
      image: AppTrail
    },
    {
      name: "Pacific Crest Trail",
      location: "West Coast, USA",
      difficulty: "Difficult",
      length: "2,650 miles",
      description: "A long-distance hiking and equestrian trail along the highest portions of the Sierra Nevada and Cascade mountains.",
      image: PacificTrail
    },
    {
      name: "John Muir Trail",
      location: "Sierra Nevada, CA",
      difficulty: "Difficult",
      length: "211 miles",
      description: "A long-distance trail in the Sierra Nevada mountain range of California, passing through Yosemite.",
      image: JohnTrail
    },
    {
      name: "Bright Angel Trail",
      location: "Grand Canyon, AZ",
      difficulty: "Moderate",
      length: "12 miles round trip",
      description: "A popular hiking trail that descends into the Grand Canyon from the South Rim.",
      image: AngelTrail
    },
    {
      name: "Half Dome Trail",
      location: "Yosemite, CA",
      difficulty: "Difficult",
      length: "14-16 miles round trip",
      description: "A strenuous hike to the base of Half Dome in Yosemite National Park.",
      image: HalfDome
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <Title title="USA Trails" subtitle="Discover amazing hiking trails across America" />

      <div className="max-w-6xl mx-auto space-y-8 p-8">
          <Title title="Featured Trails" subtitle="Iconic routes that define American hiking" />
          <Carousell img1={AppTrail} img2={PacificTrail} img3={AngelTrail} img4={JohnTrail} img5={HalfDome} />

          <Title title="Explore Trails" subtitle="Find your perfect adventure" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usaTrails.map((trail, index) => (
              <TrailCard key={index} {...trail} />
            ))}
          </div>

          <Title title="Planning Your USA Adventure" subtitle="Essential tips for long-distance hiking" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Permits & Regulations</h3>
              <p className="text-gray-600">Many national parks require permits. Check requirements for popular trails like the Appalachian and Pacific Crest trails.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Best Seasons</h3>
              <p className="text-gray-600">Summer (June-August) for most trails, but spring and fall offer milder weather in many regions.</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default UsaT;