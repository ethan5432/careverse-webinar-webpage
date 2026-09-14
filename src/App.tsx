import Nav from './components/Nav';
import Hero from './components/Hero';
import WhoFor from './components/WhoFor';
import WalkAway from './components/WalkAway';
import Speaker from './components/Speaker';
import HourWorks from './components/HourWorks';
import Close from './components/Close';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <main>
        <Hero />
        <WhoFor />
        <WalkAway />
        <Speaker />
        <HourWorks />
        <Close />
      </main>
      <Footer />
    </div>
  );
}
