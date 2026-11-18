import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import Resources from './pages/Resources';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/video-editing" element={<VideoEditing />} />
          <Route path="/services/creative-ad-shoots" element={<CreativeAdShoots />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/academy/:id" element={<CourseDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
