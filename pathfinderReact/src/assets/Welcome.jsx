function WelcomeMessage({ info , user }) {
  
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-72 text-center hover:shadow-xl transition-all duration-200">
      <h1>Hello, {user}!</h1>
      <p>This trail is about {info}</p>
    </div>
  );
}

export default WelcomeMessage; 
