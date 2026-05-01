import Title from "./assets/Title.jsx";
import TrailCard from "./assets/TrailCard.jsx";
import Carousell from "./assets/Carousell";
import coast from "./assets/coast.jpg";
import cooltrail from "./assets/cooltrail.jpg";
import path from "./assets/path.jpg";
import Yosemite from "./assets/Yosemite.jpg";
import HalfDome from "./assets/HalfDome.jpg";
import MistTrail from "./assets/MistTrail.jpg";
import Torrey from "./assets/Torrey.jpg";
import MtWhitney from "./assets/MtWhitney.jpg"
import Tahoe from "./assets/Tahoe.jpg"
function CaliforniaT() {
  const californiaTrails = [
    {
      name: "Yosemite Falls",
      location: "Yosemite National Park",
      difficulty: "Moderate",
      length: "7 miles round trip",
      description: "Hike to the base of North America's tallest waterfall, with stunning views and mist along the way.",
      image: Yosemite
    },
    {
      name: "Half Dome Trail",
      location: "Yosemite National Park",
      difficulty: "Difficult",
      length: "14-16 miles round trip",
      description: "Strenuous climb to the base of Half Dome with panoramic valley views.",
      image: HalfDome
    },
    {
      name: "Mist Trail",
      location: "Yosemite National Park",
      difficulty: "Moderate",
      length: "3 miles round trip",
      description: "Iconic trail to Vernal Fall with spectacular waterfalls and granite cliffs.",
      image: MistTrail
    },
    {
      name: "Torrey Pines State Beach",
      location: "San Diego County",
      difficulty: "Easy",
      length: "2.5 miles",
      description: "Coastal trail through rare Torrey pine forest with ocean views and beach access.",
      image: Torrey
    },
    {
      name: "Mount Whitney Trail",
      location: "Sequoia National Park",
      difficulty: "Difficult",
      length: "22 miles round trip",
      description: "America's highest peak at 14,505 feet. Requires permits and preparation.",
      image: MtWhitney
    },
    {
      name: "Tahoe Rim Trail",
      location: "Lake Tahoe",
      difficulty: "Moderate",
      length: "165 miles total",
      description: "Scenic trail around Lake Tahoe with alpine meadows and lake views.",
      image: Tahoe
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <Title title="California Trails" subtitle="From coastal paths to mountain summits" />
      

      <div className="max-w-6xl mx-auto space-y-8 p-8">

          <Title title="California Icons" subtitle="World-famous trails and natural wonders" />
          <Carousell img1={Yosemite} img2={MistTrail} img3={Torrey} img4={MtWhitney} img5={Tahoe} />


          <Title title="Explore California" subtitle="Trails from desert to redwoods" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {californiaTrails.map((trail, index) => (
              <TrailCard key={index} {...trail} />
            ))}
          </div>


          <Title title="California Hiking Guide" subtitle="Navigate the Golden State's diverse terrain" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Wildfire Season</h3>
              <p className="text-gray-600">Many trails close during fire season (typically summer-fall). Check fire conditions and restrictions.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Permit Requirements</h3>
              <p className="text-gray-600">Popular parks like Yosemite and Joshua Tree require day-use or overnight permits. Book well in advance.</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default CaliforniaT;
