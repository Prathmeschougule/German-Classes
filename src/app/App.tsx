import { TopHeader } from './components/TopHeader';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { LearningRoadmap } from './components/LearningRoadmap';
import { Mission } from './components/Mission';
import { WhatWeProvide } from './components/WhatWeProvide';
import { WhatWeOffer } from './components/WhatWeOffer';
import { Testimonials } from './components/Testimonials';
import { Partners } from './components/Partners';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <TopHeader />
        <Navigation />
        <Hero />
        <About />
        <LearningRoadmap />
        <Mission />
        <WhatWeProvide />
        <WhatWeOffer />
        <Testimonials />
        <Partners />
        <Blog />
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}