import Links from "./Links";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  const user = {
    name: "Your Name",
    city: "Your City",
    bio: "I made this!",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  };

  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;