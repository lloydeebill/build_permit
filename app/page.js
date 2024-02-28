import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PoweredBy from './components/PoweredBy';
import AboutSection from './components/AboutSection';
import CalltoAction from './components/CalltoAction';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F1F1F1]">
      <Navbar />
      {/* Wrap content sections in a container, but not the footer */}
      <div className="container mx-auto px-4 lg:px-12 mt-20">
        <HeroSection />
        <PoweredBy />
        <AboutSection />
        <CalltoAction />
      </div>
      {/* Footer outside the container to allow it to stretch full width */}
      <Footer />
    </main>
  );
}
