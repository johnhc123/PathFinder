import Title from "./assets/Title.jsx";
import ReviewCard from "./assets/ReviewCard.jsx";
import Stars from "./assets/Stars.jsx";
import jon from "./assets/jon.jpg";
import julian from "./assets/julian.png";
import zuchi from "./assets/zuchi.png";

function Reviews() {
  const reviews = [
    {
      name: "Jonathan Chen",
      rating: 5,
      review: "Absolutely amazing app! The trail recommendations are spot-on and the community reviews helped me choose the perfect hike for my family. The Sequoia Bayview Trail was incredible - we'll definitely be back!",
      picture: jon,
      trail: "Sequoia Bayview Trail",
      date: "March 2026"
    },
    {
      name: "Julian Martinez",
      rating: 4,
      review: "Great resource for planning hikes. The difficulty ratings are accurate and the photos really help visualize the trails. Took my group on the Inspiration Point Trail - the views were breathtaking!",
      picture: julian,
      trail: "Inspiration Point Trail",
      date: "February 2026"
    },
    {
      name: "Zuchi Tanaka",
      rating: 5,
      review: "This app transformed my hiking experience! The detailed trail information and user reviews gave me confidence to try new routes. The Pacific Crest Trail section was life-changing.",
      picture: zuchi,
      trail: "Pacific Crest Trail",
      date: "January 2026"
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      review: "Perfect for both beginners and experienced hikers. The safety tips and preparation guides are invaluable. Had an amazing time on the Yosemite Falls trail - highly recommend!",
      picture: jon,
      trail: "Yosemite Falls",
      date: "December 2025"
    },
    {
      name: "Mike Rodriguez",
      rating: 4,
      review: "Love the community aspect and the variety of trails available. The app could use more filtering options, but overall fantastic. The Tahoe Rim Trail exceeded expectations!",
      picture: julian,
      trail: "Tahoe Rim Trail",
      date: "November 2025"
    },
    {
      name: "Emma Wilson",
      rating: 5,
      review: "The best hiking app I've used! Clear maps, accurate descriptions, and helpful reviews from real hikers. The Half Dome Trail was challenging but worth every step.",
      picture: zuchi,
      trail: "Half Dome Trail",
      date: "October 2025"
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Title title="Hiker Reviews" subtitle="Real experiences from our trail community" />

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Rating Summary */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Overall Rating</h2>
          <div className="flex items-center justify-center mb-2">
            <Stars />
            <span className="ml-3 text-xl font-semibold">{averageRating.toFixed(1)} out of 5</span>
          </div>
          <p className="text-gray-600">Based on {reviews.length} reviews</p>
        </div>

        {/* Reviews Grid */}
        <section>
          <Title title="Recent Reviews" subtitle="What hikers are saying about their experiences" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Share Your Experience</h3>
            <p className="text-gray-600 mb-4">Have you hiked with us? We'd love to hear about your adventure!</p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Write a Review
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Reviews;
