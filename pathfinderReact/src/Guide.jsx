import Card from "./assets/Card.jsx";
import Title from "./assets/Title.jsx";
import Stars from "./assets/Stars.jsx";
import coast from "./assets/coast.jpg";
import cooltrail from "./assets/cooltrail.jpg";

function Guide() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Title title="Hiking Guide" subtitle="Everything you need to know for a safe and enjoyable hike" />
      <br></br>
      <div className="max-w-6xl mx-auto space-y-12">
          <Title title="Preparation" subtitle="Get ready for your adventure" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="Essential Gear"
              description="Must bring water, snacks, first-aid kit, map, and appropriate clothing for the weather."
            />
            <Card
              title="Check Weather"
              description="Always check the forecast before heading out. Weather can change quickly in outdoor environments."
            />
            <Card
              title="Tell Someone"
              description="Inform a friend or family member about your plans, including route and expected return time."
            />
          </div>

          <Title title="Safety First" subtitle="Stay safe on the trails" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <img src={coast} alt="Coastal trail" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Trail Etiquette</h3>
              <p className="text-gray-600 mb-4">Stay on designated paths, pack out what you pack in, and respect wildlife.</p>
              <Stars />
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <img src={cooltrail} alt="Mountain trail" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Emergency Preparedness</h3>
              <p className="text-gray-600 mb-4">Know basic first aid, carry a charged phone, and have emergency contacts saved.</p>
              <Stars />
            </div>
          </div>

          <Title title="Pro Tips" subtitle="Make the most of your hiking experience" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              title="Pace Yourself"
              description="Take breaks, stay hydrated, and don't rush. Enjoy the journey!"
            />
            <Card
              title="Leave No Trace"
              description="Minimize your impact on the environment by following Leave No Trace principles."
            />
            <Card
              title="Wildlife Awareness"
              description="Keep a safe distance from animals and store food properly to avoid attracting wildlife."
            />
            <Card
              title="Sun Protection"
              description="Wear sunscreen, hat, and sunglasses, even on cloudy days."
            />
          </div>

          <Title title="Trail Difficulty" subtitle="Choose the right trail for your experience level" />
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-lg font-bold text-green-600 mb-2">Easy</h4>
                <p className="text-gray-600">Flat terrain, well-maintained paths, suitable for beginners.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-yellow-600 mb-2">Moderate</h4>
                <p className="text-gray-600">Some elevation changes, may include uneven surfaces.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-red-600 mb-2">Difficult</h4>
                <p className="text-gray-600">Steep inclines, rough terrain, requires good fitness level.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Guide;
