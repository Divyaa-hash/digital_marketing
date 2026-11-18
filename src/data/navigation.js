export const navigation = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  {
    name: 'Services',
    route: '/services',
    dropdown: [
      { name: 'SEO', route: '/services/seo' },
      { name: 'Social Media Marketing', route: '/services/social-media-marketing' },
      { name: 'Performance Marketing', route: '/services/performance-marketing' },
      { name: 'Branding', route: '/services/branding' },
      { name: 'Graphic Design', route: '/services/graphic-design' },
      { name: 'Website Development', route: '/services/website-development' },
      { name: 'Video Editing', route: '/services/video-editing' },
      { name: 'Creative Ad Shoots', route: '/services/creative-ad-shoots' }
    ]
  },
  { name: 'Industries', route: '/industries' },
  { name: 'Case Studies', route: '/case-studies' },
  { name: 'BM Academy', route: '/academy' },
  { name: 'Resources', route: '/resources' },
  { name: 'Contact', route: '/contact' }
];
