
import About from "./Components/About";
import Campus from "./Components/Campus";
import Navbar from "./Components/Navbar"
import Programs from "./Components/Programs";
import Testimonials from "./Components/Testimonials";
import Title from "./Components/Title";
import Hero from "./Components/Hero"
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className=" container">
        <Title subTitle='Our PROGRAM' title='What We Offer'  />
        <Programs />
        <About />
        <Title subTitle='Gallery' title='Campos Photos'  />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What student says'  />
        <Testimonials />
        <Title subTitle='Contact us' title='Get in Touch'  />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;
