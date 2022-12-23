import About from "./components/about";
import Gallery from "./components/gallery";
import Navbar from "./components/navbar";
import Rooms from "./components/rooms";
import Services from "./components/services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Services />
        <About />
        <Gallery />
        <Rooms />
      </main>
    </div>
  );
}

export default App;
