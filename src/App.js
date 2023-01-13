import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Navbar from "./Components/Navbar";
import Rooms from "./Components/Rooms";
import Services from "./Components/Services";
import Teams from "./Components/Teams";

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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
