import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SEO from './pages/SEO';
import SocialMediaMarketing from './pages/SocialMediaMarketing';
import PerformanceMarketing from './pages/PerformanceMarketing';
import Branding from './pages/Branding';
import GraphicDesign from './pages/GraphicDesign';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import VideoEditing from './pages/VideoEditing';
import CreativeAdShoots from './pages/CreativeAdShoots';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import Academy from './pages/Academy';
import CourseDetail from './pages/CourseDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

const PageWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/services/seo" element={<PageWrapper><SEO /></PageWrapper>} />
          <Route path="/services/social-media-marketing" element={<PageWrapper><SocialMediaMarketing /></PageWrapper>} />
          <Route path="/services/performance-marketing" element={<PageWrapper><PerformanceMarketing /></PageWrapper>} />
          <Route path="/services/branding" element={<PageWrapper><Branding /></PageWrapper>} />
          <Route path="/services/graphic-design" element={<PageWrapper><GraphicDesign /></PageWrapper>} />
          <Route path="/services/website-development" element={<PageWrapper><WebsiteDevelopment /></PageWrapper>} />
          <Route path="/services/video-editing" element={<PageWrapper><VideoEditing /></PageWrapper>} />
          <Route path="/services/creative-ad-shoots" element={<PageWrapper><CreativeAdShoots /></PageWrapper>} />
          <Route path="/industries" element={<PageWrapper><Industries /></PageWrapper>} />
          <Route path="/case-studies" element={<PageWrapper><CaseStudies /></PageWrapper>} />
          <Route path="/academy" element={<PageWrapper><Academy /></PageWrapper>} />
          <Route path="/academy/:id" element={<PageWrapper><CourseDetail /></PageWrapper>} />
          <Route path="/resources" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="/resources/:id" element={<PageWrapper><BlogDetail /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
          <Route path="/terms-and-conditions" element={<PageWrapper><TermsConditions /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
