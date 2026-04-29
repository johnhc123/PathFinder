 import {useState} from "react";
import zuchi from "./zuchi.png";

 function RatingInteractive({ onAddReview }) {
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState("");
    const [trail, setTrail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            name,
            rating: (rating),
            review,
            picture: zuchi,
            trail,
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
        };
        onAddReview(newReview);
        setName("");
        setRating(5);
        setReview("");
        setTrail("");
        setShowForm(false);
    };

    return (
        <div className="bg-green-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4 ">Share Your Experience</h3>
            <p className="text-gray-600 mb-4 ">Have you hiked with us? We'd love to hear about your adventure!</p>
            {!showForm ? (
                <button 
                    className=" bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors "
                    onClick={() => setShowForm(true)}
                >
                  Write a Review!
                </button>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <select
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="w-full p-2 border rounded-lg"
                        >
                            <option value={1}>1 Star</option>
                            <option value={2}>2 Stars</option>
                            <option value={3}>3 Stars</option>
                            <option value={4}>4 Stars</option>
                            <option value={5}>5 Stars</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Trail Name"
                            value={trail}
                            onChange={(e) => setTrail(e.target.value)}
                            className="w-full p-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Write your review..."
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            className="w-full p-4 border rounded-lg"
                            rows="4"
                            required
                        />
                    </div>
                    <div className="flex space-x-2">
                        <button 
                            type="submit"
                            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Submit Review
                        </button>
                        <button 
                            type="button"
                            onClick={() => setShowForm(false)}
                            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
 }
 export default RatingInteractive;