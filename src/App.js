import About from "./components/about";
import Gallery from "./components/gallery";
import Navbar from "./components/navbar";
import Rooms from "./components/rooms";
import Services from "./components/services";
import Teams from "./components/teams";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Services />
        <About />
        <Gallery />
        <Rooms />
        <Teams />
      </main>
    </div>
  );
}

export default App;
