export const navigation = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  {
    name: 'Services',
    route: '/services',
    dropdown: [
      { name: 'Digital Marketing', route: '/services/digital-marketing' },
      { name: 'AI & Automation', route: '/services/ai-automation' },
      { name: 'Web & Technology', route: '/services/web-technology' },
      { name: 'Google Maps', route: '/services/google-maps' },
      { name: 'Business Ads', route: '/services/business-ads' },
      { name: 'Business Growth', route: '/services/business-growth' }
    ]
  },
  { name: 'Industries', route: '/industries' },
  { name: 'Case Studies', route: '/case-studies' },
  { name: 'BM Academy', route: '/academy' },
  { name: 'Resources', route: '/resources' },
  { name: 'Contact', route: '/contact' }
];
