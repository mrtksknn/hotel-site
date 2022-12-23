import About from "./components/about";
import Gallery from "./components/gallery";
import Navbar from "./components/navbar";
import Services from "./components/services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Services />
        <About />
        <Gallery />
      </main>
    </div>
  );
}

export default App;
