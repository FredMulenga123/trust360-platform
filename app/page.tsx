import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Industries from "./components/Industries";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Industries />
       <Stats />
      <CTA />
      <Footer />
    </>
  );
}