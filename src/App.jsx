import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ImageGallery from "./components/ImageGallery";
import "./App.css";
import Stats from "./components/Stats";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Banner from "./components/Banner";
import Catalogue from "./components/Catalogue";
import Welcome from "./components/Welcome";

const App = () => {
  const [showBanner, setShowBanner] = useState(true); // Controls banner visibility
  const [showStats , SetShowStats] = useState(false);
  // Scroll to top on page load
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="flex flex-col items-center overflow-x-hidden scroll-smooth neue">
      {showBanner && <Banner onClose={() => {
        setShowBanner(false);
        SetShowStats(true);
      }} />}
      <Header />
      <Welcome />
      <HeroSection />
      {showStats && <Stats />}
      <About />
      <ImageGallery />
      <Catalogue />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
