import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import DigitalMarketing from './pages/DigitalMarketing';
import AIAutomation from './pages/AIAutomation';
import WebTechnology from './pages/WebTechnology';
import GoogleMaps from './pages/GoogleMaps';
import BusinessAds from './pages/BusinessAds';
import BusinessGrowth from './pages/BusinessGrowth';
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
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/ai-automation" element={<AIAutomation />} />
          <Route path="/services/web-technology" element={<WebTechnology />} />
          <Route path="/services/google-maps" element={<GoogleMaps />} />
          <Route path="/services/business-ads" element={<BusinessAds />} />
          <Route path="/services/business-growth" element={<BusinessGrowth />} />
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
