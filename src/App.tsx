import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CodeOfConduct } from './pages/CodeOfConduct';
import { Venue } from './pages/Venue';
import { Travel } from './pages/Travel';
import { Accommodations } from './pages/Accommodations';
import { CFP } from './pages/CFP';
import { ImportantDates } from './pages/ImportantDates';
import { Sponsors } from './pages/Sponsors';
import { OurSponsors } from './pages/OurSponsors';
import { Tickets } from './pages/Tickets';

function App() {
  return (
    <Router>
      <IconContext.Provider value={{ style: { fill: 'url(#globalAubergineOrangeGrad)' } }}>
        <div className="l-site" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {/* Global SVG definitions for icons */}
          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <linearGradient id="globalAubergineOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop stopColor="var(--vf-color-accent)" offset="0%" />
              <stop stopColor="var(--vf-color-brand)" offset="100%" />
            </linearGradient>
          </svg>
          
          <Navigation />
          <div style={{ flex: '1 0 auto' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/code-of-conduct" element={<CodeOfConduct />} />
              <Route path="/venue" element={<Venue />} />
              <Route path="/travel-and-visas" element={<Travel />} />
              <Route path="/accommodations" element={<Accommodations />} />
              <Route path="/cfp" element={<CFP />} />
              <Route path="/important-dates" element={<ImportantDates />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/our-sponsors" element={<OurSponsors />} />
              <Route path="/tickets" element={<Tickets />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </IconContext.Provider>
    </Router>
  );
}

export default App;



