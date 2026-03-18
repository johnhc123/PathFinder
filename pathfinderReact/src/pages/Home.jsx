import ShoeImage from "../assets/Shoe.jpg";
import kagurabachi from "../assets/kagurabachi.jpeg";

function Home() {
  return (
    <div>
      <h1>Welcome Home</h1>
      <img src={ShoeImage} alt="Shoe" />
      <img src={kagurabachi} alt="Kagurabachi" />
    </div>
  );
}

export default Home;