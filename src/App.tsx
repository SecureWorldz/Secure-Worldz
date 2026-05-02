import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustedBy from './components/TrustedBy';
import WhatWeDo from './components/WhatWeDo';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Fixed Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="/Background.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <TrustedBy />
          <WhatWeDo />
          <Products />
          <Pricing />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
