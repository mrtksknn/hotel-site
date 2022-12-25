import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Rooms from "./components/Rooms";
import Services from "./components/Services";
import Teams from "./components/Teams";

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
