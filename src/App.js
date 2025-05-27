import React, { useState } from 'react';
import { 
  ChevronDownIcon, 
  ChevronUpIcon, 
  ArrowTrendingUpIcon, 
  MagnifyingGlassIcon, 
  RocketLaunchIcon, 
  ChatBubbleLeftRightIcon,
  StarIcon,
  CheckIcon,
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const App = () => {
  const [email, setEmail] = useState('');
  const [currentView, setCurrentView] = useState('home');
  const [currentService, setCurrentService] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! You\'ll receive weekly trend insights.');
    setEmail('');
  };

  const navigateToService = (serviceId) => {
    setCurrentService(serviceId);
    setCurrentView('service');
  };

  const navigateHome = () => {
    setCurrentView('home');
    setCurrentService(null);
  };

  const handleBookCall = () => {
    // In a real app, this would open a calendar booking widget
    alert('Booking functionality would open here. For now, please email shane@emrgstudios.com to schedule your free strategy call.');
  };

  const handleGetStarted = () => {
    // In a real app, this would open a contact form or booking system
    alert('Get Started functionality would open here. For now, please email shane@emrgstudios.com to begin your project.');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const ServiceDetailPage = ({ service, onBack }) => (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowRightIcon className="w-5 h-5 mr-2 rotate-180" />
          Back to Services
        </button>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <service.icon className="w-12 h-12 text-blue-600 mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{service.title}</h1>
              <p className="text-xl text-gray-600">{service.tagline}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What You Get</h3>
              <ul className="space-y-2">
                {service.deliverables.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Perfect For</h3>
              <ul className="space-y-2">
                {service.perfectFor.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRightIcon className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Client Results</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {service.results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{result.metric}</div>
                  <div className="text-sm text-gray-600">{result.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">{service.price}</div>
            <p className="text-gray-600 mb-6">{service.priceDescription}</p>
            <button 
              onClick={handleGetStarted}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const services = {
    trends: {
      icon: ArrowTrendingUpIcon,
      title: "Trend Intelligence",
      tagline: "Stay ahead of cultural shifts",
      description: "Monthly insights on emerging trends",
      price: "$2,500/month",
      priceDescription: "Quarterly reports available",
      deliverables: [
        "Monthly trend forecast reports",
        "Platform-specific opportunity analysis", 
        "Cultural shift predictions",
        "Competitive landscape insights"
      ],
      perfectFor: [
        "Brands launching new products",
        "Marketing teams planning campaigns",
        "Agencies serving Gen Z clients"
      ],
      results: [
        { metric: "340%", description: "Avg engagement increase" },
        { metric: "2.3M", description: "Views generated" },
        { metric: "89%", description: "Prediction accuracy" }
      ]
    },
    audits: {
      icon: MagnifyingGlassIcon,
      title: "Content Optimization",
      tagline: "Maximize your content performance",
      description: "Deep-dive content performance analysis",
      price: "$1,500",
      priceDescription: "One-time comprehensive audit",
      deliverables: [
        "Content performance analysis",
        "Audience engagement insights",
        "Platform optimization recommendations",
        "Content calendar strategy"
      ],
      perfectFor: [
        "Brands with declining engagement",
        "Teams needing content direction",
        "Companies entering new platforms"
      ],
      results: [
        { metric: "67%", description: "Cost reduction" },
        { metric: "180%", description: "Engagement boost" },
        { metric: "45%", description: "Reach increase" }
      ]
    },
    concepts: {
      icon: RocketLaunchIcon,
      title: "Viral Campaigns",
      tagline: "Create content that spreads",
      description: "Campaign concepts designed to go viral",
      price: "$3,500",
      priceDescription: "Per campaign concept",
      deliverables: [
        "Viral campaign concepts",
        "Platform-specific strategies",
        "Content series frameworks",
        "Launch timeline & tactics"
      ],
      perfectFor: [
        "Product launches",
        "Brand awareness campaigns",
        "Seasonal marketing pushes"
      ],
      results: [
        { metric: "10x", description: "Organic reach" },
        { metric: "500%", description: "Share rate increase" },
        { metric: "85%", description: "Campaign success rate" }
      ]
    }
  };

  if (currentView === 'service' && currentService) {
    return <ServiceDetailPage service={services[currentService]} onBack={navigateHome} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {currentView === 'home' ? (
        <>
          {/* Navigation */}
          <nav className="glass-nav fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="text-2xl font-bold text-gray-900">
                  EMRG Studios
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                  <button 
                    onClick={() => scrollToSection('results')}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    Results
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="apple-button bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
                  >
                    Get Started
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button
                    onClick={toggleMobileMenu}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {mobileMenuOpen ? (
                      <XMarkIcon className="w-6 h-6" />
                    ) : (
                      <Bars3Icon className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              {mobileMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <button 
                      onClick={() => scrollToSection('results')}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      Results
                    </button>
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      Services
                    </button>
                    <button 
                      onClick={() => scrollToSection('about')}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      About
                    </button>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="block w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all mt-2"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Hero Section - Full Scale */}
          <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
            
            {/* Hero Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
              <div className="space-y-8">
                {/* Main Headline */}
                <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-tight">
                  Turn Trends Into
                  <span className="block text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Revenue
                  </span>
                </h1>
                
                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Strategic trend intelligence and viral content frameworks that help brands stay 3 months ahead of the competition
                </p>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 font-medium">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Trusted by 200+ brands
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    98% client satisfaction
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    100M+ views generated
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="apple-button bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                  >
                    View Our Services
                  </button>
                  <button 
                    onClick={() => scrollToSection('results')}
                    className="apple-button border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all"
                  >
                    See Results
                  </button>
                </div>
                
                {/* Client Logos Preview */}
                <div className="pt-16">
                  <p className="text-sm text-gray-500 mb-6">Trusted by industry leaders</p>
                  <div className="flex justify-center items-center space-x-12 opacity-60">
                    <div className="text-2xl font-bold text-gray-400">Snap Inc.</div>
                    <div className="text-2xl font-bold text-gray-400">StockX</div>
                    <div className="text-2xl font-bold text-gray-400">Phony Content</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDownIcon className="w-6 h-6 text-gray-400" />
            </div>
          </section>

          {/* Results Section */}
          <section id="results" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
                <button 
                  onClick={() => toggleSection('results-methodology')}
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center mx-auto"
                >
                  See methodology
                  {expandedSections['results-methodology'] ? 
                    <ChevronUpIcon className="w-5 h-5 ml-1" /> : 
                    <ChevronDownIcon className="w-5 h-5 ml-1" />
                  }
                </button>
              </div>
              
              {expandedSections['results-methodology'] && (
                <div className="bg-gray-50 rounded-xl p-6 mb-16 max-w-3xl mx-auto">
                  <h3 className="font-semibold mb-3">Our Methodology</h3>
                  <p className="text-gray-700">We track cultural momentum across 50+ platforms, analyze engagement patterns, and identify emerging trends 3-6 months before they peak. Our frameworks are tested with real campaigns and validated through measurable results.</p>
                </div>
              )}
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">340%</div>
                  <div className="text-gray-600">Avg. Engagement Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2.3M</div>
                  <div className="text-gray-600">Monthly Views</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">67%</div>
                  <div className="text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">89%</div>
                  <div className="text-gray-600">Trend Accuracy</div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Strategic solutions designed to keep your brand 3 months ahead of the competition
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(services).map(([key, service]) => (
                  <div key={key} className="apple-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{service.tagline}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-gray-900 mb-1">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.priceDescription}</div>
                    </div>
                    
                    {/* Key Benefits */}
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-3">What's Included:</div>
                      <ul className="space-y-2">
                        {service.deliverables.slice(0, 3).map((item, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button 
                      onClick={() => navigateToService(key)}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Services CTA */}
              <div className="text-center mt-16">
                <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Not sure which service fits?</h3>
                  <p className="text-gray-600 mb-6">
                    Book a free 15-minute consultation to discuss your specific needs and get a custom recommendation.
                  </p>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Book Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success</h2>
                <button 
                  onClick={() => toggleSection('testimonials-details')}
                  className="text-blue-600 hover:text-blue-700 transition-colors flex items-center mx-auto"
                >
                  View all testimonials
                  {expandedSections['testimonials-details'] ? 
                    <ChevronUpIcon className="w-5 h-5 ml-1" /> : 
                    <ChevronDownIcon className="w-5 h-5 ml-1" />
                  }
                </button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6">"340% engagement increase in 3 months."</p>
                  <div className="font-semibold">Sarah Chen</div>
                  <div className="text-sm text-gray-500">Marketing Director, TechFlow</div>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6">"Generated 2.3M views with their strategy."</p>
                  <div className="font-semibold">Marcus Rodriguez</div>
                  <div className="text-sm text-gray-500">CEO, CreativeSpace</div>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6">"10x growth in 6 months. Game-changing."</p>
                  <div className="font-semibold">Jessica Park</div>
                  <div className="text-sm text-gray-500">Founder, NextGen Brands</div>
                </div>
              </div>
              
              {expandedSections['testimonials-details'] && (
                <div className="mt-12 grid md:grid-cols-2 gap-8 animate-fade-in">
                  <div className="bg-white p-6 rounded-xl shadow">
                    <p className="text-gray-700 mb-4">"EMRG Studios helped us identify the micro-nostalgia trend 3 months before it peaked. Our campaign generated 5M organic impressions."</p>
                    <div className="font-semibold">Alex Thompson</div>
                    <div className="text-sm text-gray-500">Brand Manager, RetroFit</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow">
                    <p className="text-gray-700 mb-4">"Their content audit revealed gaps we never saw. Engagement increased 280% in the first month after implementing their recommendations."</p>
                    <div className="font-semibold">Maya Patel</div>
                    <div className="text-sm text-gray-500">Social Media Lead, EcoLux</div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">About EMRG Studios</h2>
              <p className="text-xl text-gray-600 mb-8">
                Founded by Shane Delaney, former Snap Inc. strategist with 100M+ views generated for clients.
              </p>
              
              <button 
                onClick={() => toggleSection('about-details')}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center mx-auto mb-8"
              >
                Read full story
                {expandedSections['about-details'] ? 
                  <ChevronUpIcon className="w-5 h-5 ml-2" /> : 
                  <ChevronDownIcon className="w-5 h-5 ml-2" />
                }
              </button>
              
              {expandedSections['about-details'] && (
                <div className="bg-gray-50 rounded-xl p-8 text-left animate-fade-in">
                  <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-gray-700 mb-6">
                    We help brands stay ahead of cultural shifts by providing strategic intelligence and creative direction. 
                    Our data-driven approach combines trend forecasting with actionable insights.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Experience</h3>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li>• Former Snap Inc. strategist - Spotlight platform growth</li>
                    <li>• 100M+ views generated across client campaigns</li>
                    <li>• Specialized in Gen Z and Millennial audience engagement</li>
                    <li>• Worked with Snap Inc., StockX, and Phony Content</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4">Approach</h3>
                  <p className="text-gray-700">
                    We combine cultural intelligence with data analytics to predict trends before they peak. 
                    Our strategies are built on understanding how content spreads and what drives authentic engagement.
                  </p>
                </div>
              )}
              
              <div className="flex justify-center space-x-12 mt-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">200+</div>
                  <div className="text-gray-600">Brands Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-gray-600">Client Rating</div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Book a free 30-minute strategy call
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button 
                  onClick={handleBookCall}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Book Strategy Call
                </button>
                <button 
                  onClick={() => toggleSection('contact-details')}
                  className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center"
                >
                  Contact Options
                  {expandedSections['contact-details'] ? 
                    <ChevronUpIcon className="w-5 h-5 ml-2" /> : 
                    <ChevronDownIcon className="w-5 h-5 ml-2" />
                  }
                </button>
              </div>
              
              {expandedSections['contact-details'] && (
                <div className="bg-gray-800 rounded-xl p-6 text-left max-w-2xl mx-auto animate-fade-in">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Direct Contact</h3>
                      <p className="text-gray-300 text-sm mb-2">Email: shane@emrgstudios.com</p>
                      <p className="text-gray-300 text-sm">Response time: 24 hours</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Quick Start</h3>
                      <p className="text-gray-300 text-sm mb-2">Free 30-min strategy call</p>
                      <p className="text-gray-300 text-sm">Custom proposal within 48 hours</p>
                    </div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mt-12">
                <div className="flex gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-gray-400 mt-2">Weekly trend insights • No spam</p>
              </form>
            </div>
          </section>
        </>
      ) : null}
    </div>
  );
};

export default App; 