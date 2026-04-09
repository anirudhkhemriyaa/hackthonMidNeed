import { useState, useEffect } from "react";


// Components
import DesktopNav from "./components/navbar/DesktopNav";
import MobileNav from "./components/navbar/MobileNav";
import Backdrop from "./components/navbar/Backdrop";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Partners from "./components/partners/Partners";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
  const [userIsScrolled, setUserIsScrolled] = useState(false);
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setUserIsScrolled(window.pageYOffset > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handlers
  const closeMobileMenu = () => setMobileNavbarOpen(false);
  const mobileMenuOpen = () => setMobileNavbarOpen(true);

  return (
    <div className="App">
      
      {/* Mobile Nav */}
      <MobileNav
        isOpen={mobileNavbarOpen}
        closeMobileMenu={closeMobileMenu}
      />

      {/* Backdrop */}
      <Backdrop
        isOpen={mobileNavbarOpen}
        closeMobileMenu={closeMobileMenu}
      />

      {/* Desktop Nav */}
      <DesktopNav
        userIsScrolled={userIsScrolled}
        mobileMenuOpen={mobileMenuOpen}
      />

      {/* Sections */}
      <Hero />
      <Portfolio />
      <Partners />
      <About />
   
      <Contact />
      <Footer />

    </div>
  );
}