import Card from "./assets/Card.jsx";
import TrailForm from "./assets/TrailSelectform.jsx"

function TripPlanner() {
  return <div>
    <h1 className="text-4xl font-bold text-center my-8">Trip Planner</h1> 
    <Card
    title="Trip Planner!"
    description="Here you can create custom trip itineraries!"/>;

<TrailForm></TrailForm>
</div>
}
export default TripPlanner;
