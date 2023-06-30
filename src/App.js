import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import IntroBg from "./svg/IntroBg.svg";
import Spaceship from "./svg/Spaceship.svg";

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundImage: `url(${IntroBg})`,
        }}
      >
        <Navbar />
        <div
          style={{
            backgroundImage: `url(${Spaceship})`,
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            marginTop: "0px",
          }}
        >
          <Intro />
          <About />
        </div>
      </div>
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
