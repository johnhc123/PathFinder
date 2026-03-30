import Card from "./assets/Card.jsx";
import TrailForm from "./assets/TrailSelectform.jsx"

function TripPlanner() {
  return <div>
    <h1 className="text-4xl font-bold text-center my-8">Trip Planner</h1> 
    <div className="flex items-center justify-center">
    <Card
    title="Trip Planner!"
    description="Here you can create custom trip itineraries!"/>; <br></br>
    
    <TrailForm></TrailForm>
    

</div>
</div>
}
export default TripPlanner;
