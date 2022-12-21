import About from "./components/about";
import Navbar from "./components/navbar";
import Services from "./components/services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Services />
        <About />
      </main>
    </div>
  );
}

export default App;
