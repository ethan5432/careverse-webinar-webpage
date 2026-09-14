import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import WhoFor from './components/WhoFor';
import WalkAway from './components/WalkAway';
import Speaker from './components/Speaker';
import HourWorks from './components/HourWorks';
import Close from './components/Close';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className="min-h-screen bg-cream">
      <Nav onCTAClick={openModal} />
      <main>
        <Hero onCTAClick={openModal} />
        <WhoFor />
        <WalkAway />
        <Speaker />
        <HourWorks />
        <Close onCTAClick={openModal} />
      </main>
      <Footer onCTAClick={openModal} />
      <RegistrationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
