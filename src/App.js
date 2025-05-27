import React, { useState, useEffect } from 'react';
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
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const App = () => {
  const [email, setEmail] = useState('');
  const [currentView, setCurrentView] = useState('home');
  const [currentService, setCurrentService] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle window resize
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! You\'ll receive weekly trend insights.');
    setEmail('');
  };

  const navigateToService = (serviceId) => {
    setCurrentService(serviceId);
    setCurrentView('service-detail');
  };

  const navigateHome = () => {
    setCurrentView('home');
    setCurrentService(null);
  };

  // Enhanced booking functionality
  const handleBookCall = () => {
    if (isMobile) {
      // On mobile, open phone dialer
      window.location.href = 'tel:+1234567890'; // Replace with actual phone number
    } else {
      // On desktop, open Calendly or booking platform
      window.open('https://calendly.com/shanedelaney', '_blank');
    }
  };

  // Enhanced contact functionality
  const handleGetStarted = () => {
    if (isMobile) {
      // On mobile, open email app
      window.location.href = 'mailto:shanedelaney11@gmail.com?subject=Strategy Call Request&body=Hi Shane, I\'d like to schedule a strategy call to discuss my brand\'s needs.';
    } else {
      // On desktop, scroll to contact form
      scrollToSection('contact');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Enhanced email contact
  const handleEmailContact = () => {
    window.location.href = 'mailto:shanedelaney11@gmail.com?subject=Project Inquiry&body=Hi Shane, I\'m interested in learning more about your services.';
  };

  // Phone contact
  const handlePhoneContact = () => {
    window.location.href = 'tel:+1234567890'; // Replace with actual phone number
  };

  // Social media links
  const handleLinkedInContact = () => {
    window.open('https://linkedin.com/in/shanedelaney', '_blank');
  };

  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message')
    };
    
    // Create mailto link with form data
    const subject = `Project Inquiry from ${data.name}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\n\nMessage:\n${data.message}`;
    const mailtoLink = `mailto:shanedelaney11@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your message! Your email client should open with the message pre-filled.');
    e.target.reset();
  };

  const ServiceDetailPage = ({ service, onBack }) => (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <button 
          onClick={onBack}
          className="mb-6 sm:mb-8 flex items-center text-blue-600 hover:text-blue-700 transition-colors touch-manipulation min-h-[48px] px-2 py-2 -ml-2 rounded-lg active:bg-blue-50"
        >
          <ArrowRightIcon className="w-5 h-5 mr-2 rotate-180" />
          <span className="text-base font-medium">Back to Services</span>
        </button>
        
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center mb-6">
            <service.icon className="w-12 h-12 text-blue-600 mb-4 sm:mb-0 sm:mr-4 flex-shrink-0" />
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">{service.title}</h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-1">{service.tagline}</p>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">What You Get</h3>
                <ul className="space-y-3">
                  {service.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Perfect For</h3>
                <ul className="space-y-3">
                  {service.perfectFor.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRightIcon className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">Client Results</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {service.results.map((result, index) => (
                  <div key={index} className="text-center py-2">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">{result.metric}</div>
                    <div className="text-sm sm:text-base text-gray-600">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">{service.price}</div>
            <p className="text-gray-600 text-sm sm:text-base">{service.priceDescription}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center">
              <button 
                onClick={handleGetStarted}
                className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors touch-manipulation min-h-[48px] flex items-center justify-center"
              >
                {isMobile ? (
                  <>
                    <EnvelopeIcon className="w-5 h-5 mr-2" />
                    Email Us
                  </>
                ) : (
                  'Get Started'
                )}
              </button>
              <button 
                onClick={handleBookCall}
                className="w-full sm:w-auto bg-gray-100 text-gray-900 px-6 sm:px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors touch-manipulation min-h-[48px] flex items-center justify-center"
              >
                {isMobile ? (
                  <>
                    <PhoneIcon className="w-5 h-5 mr-2" />
                    Call Now
                  </>
                ) : (
                  'Book a Call'
                )}
              </button>
            </div>
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

  if (currentView === 'service-detail' && currentService) {
    return <ServiceDetailPage service={services[currentService]} onBack={navigateHome} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {currentView === 'home' ? (
        <>
          {/* Navigation */}
          <nav className="glass-nav fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16 sm:h-18">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  EMRG Studios
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6 lg:space-x-8">
                  <button 
                    onClick={() => scrollToSection('results')}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2"
                  >
                    Results
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="apple-button bg-blue-600 text-white px-4 lg:px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
                  >
                    Get Started
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button
                    onClick={toggleMobileMenu}
                    className="text-gray-700 hover:text-blue-600 transition-colors p-2 touch-manipulation"
                    aria-label="Toggle mobile menu"
                  >
                    {isMobileMenuOpen ? (
                      <XMarkIcon className="w-6 h-6" />
                    ) : (
                      <Bars3Icon className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/20 shadow-lg">
                  <div className="px-4 py-3 space-y-1">
                    <button 
                      onClick={() => scrollToSection('results')}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors rounded-lg touch-manipulation"
                    >
                      Results
                    </button>
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors rounded-lg touch-manipulation"
                    >
                      Services
                    </button>
                    <button 
                      onClick={() => scrollToSection('about')}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors rounded-lg touch-manipulation"
                    >
                      About
                    </button>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="block w-full text-center px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all mt-2 touch-manipulation min-h-[48px]"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Hero Section - Mobile Optimized */}
          <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50"></div>
            <div className="absolute top-20 right-10 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute bottom-20 left-10 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
            
            {/* Hero Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="space-y-6 sm:space-y-8">
                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-gray-900 leading-tight">
                  Turn Trends Into
                  <span className="block text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Revenue
                  </span>
                </h1>
                
                {/* Subheadline */}
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                  Strategic trend intelligence and viral content frameworks that help brands stay 3 months ahead of the competition
                </p>
                
                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm text-gray-500 font-medium px-4">
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
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-8 px-4">
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="w-full sm:w-auto apple-button bg-blue-600 text-white px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl touch-manipulation min-h-[48px]"
                  >
                    View Our Services
                  </button>
                  <button 
                    onClick={() => scrollToSection('results')}
                    className="w-full sm:w-auto apple-button border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all touch-manipulation min-h-[48px]"
                  >
                    See Results
                  </button>
                </div>
                
                {/* Client Logos Preview */}
                <div className="pt-12 sm:pt-16 px-4">
                  <p className="text-sm text-gray-500 mb-4 sm:mb-6">Trusted by industry leaders</p>
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-12 opacity-60">
                    <div className="text-lg sm:text-2xl font-bold text-gray-400">Snap Inc.</div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-400">StockX</div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-400">Phony Content</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
            </div>
          </section>

          {/* Results Section */}
          <section id="results" className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
                <button 
                  onClick={() => toggleSection('results-methodology')}
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center mx-auto touch-manipulation py-2"
                >
                  See methodology
                  {expandedSections['results-methodology'] ? 
                    <ChevronUpIcon className="w-5 h-5 ml-1" /> : 
                    <ChevronDownIcon className="w-5 h-5 ml-1" />
                  }
                </button>
              </div>
              
              {expandedSections['results-methodology'] && (
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-12 sm:mb-16 max-w-3xl mx-auto">
                  <h3 className="font-semibold mb-3 text-base sm:text-lg">Our Methodology</h3>
                  <p className="text-gray-700 text-sm sm:text-base">We track cultural momentum across 50+ platforms, analyze engagement patterns, and identify emerging trends 3-6 months before they peak. Our frameworks are tested with real campaigns and validated through measurable results.</p>
                </div>
              )}
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-2">340%</div>
                  <div className="text-gray-600 text-sm sm:text-base">Avg. Engagement Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-2">2.3M</div>
                  <div className="text-gray-600 text-sm sm:text-base">Monthly Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-2">67%</div>
                  <div className="text-gray-600 text-sm sm:text-base">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-2">89%</div>
                  <div className="text-gray-600 text-sm sm:text-base">Trend Accuracy</div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section - Mobile Optimized */}
          <section id="services" className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Core Services</h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Strategic solutions that keep your brand ahead of cultural shifts</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {Object.entries(services).map(([key, service]) => (
                  <div key={key} className="apple-card bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{service.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600 mt-1">{service.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{service.description}</p>
                    
                    <div className="mb-4 sm:mb-6">
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{service.price}</div>
                      <div className="text-xs sm:text-sm text-gray-500">{service.priceDescription}</div>
                    </div>
                    
                    <button 
                      onClick={() => navigateToService(key)}
                      className="w-full apple-button bg-blue-600 text-white py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 touch-manipulation min-h-[48px] text-sm sm:text-base"
                    >
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12 sm:mt-16">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg max-w-2xl mx-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h3>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">Book a free consultation to discuss your brand's needs</p>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full sm:w-auto apple-button bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 touch-manipulation min-h-[48px]"
                  >
                    Book Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section - Mobile Optimized */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
                <button 
                  onClick={() => toggleSection('all-testimonials')}
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center mx-auto touch-manipulation py-2"
                >
                  View all testimonials
                  {expandedSections['all-testimonials'] ? 
                    <ChevronUpIcon className="w-5 h-5 ml-1" /> : 
                    <ChevronDownIcon className="w-5 h-5 ml-1" />
                  }
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="apple-card bg-gray-50 p-6 sm:p-8 rounded-3xl">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 text-lg sm:text-xl">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed italic">
                    "EMRG Studios helped us identify the micro-nostalgia trend 3 months before it peaked. Our throwback campaign generated 2.3M views and 340% higher engagement."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm sm:text-base">SM</span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">Sarah Martinez</div>
                      <div className="text-gray-600 text-xs sm:text-sm">Brand Director, Fashion Retailer</div>
                    </div>
                  </div>
                </div>
                
                <div className="apple-card bg-gray-50 p-6 sm:p-8 rounded-3xl">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 text-lg sm:text-xl">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed italic">
                    "Their content audit revealed we were missing 67% of our potential reach. After implementing their recommendations, our acquisition costs dropped by 67%."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm sm:text-base">MK</span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">Michael Kim</div>
                      <div className="text-gray-600 text-xs sm:text-sm">CMO, Tech Startup</div>
                    </div>
                  </div>
                </div>
                
                <div className="apple-card bg-gray-50 p-6 sm:p-8 rounded-3xl">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 text-lg sm:text-xl">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed italic">
                    "The viral concept deck they created for our product launch exceeded all expectations. We hit 1M+ views in the first week with 89% positive sentiment."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm sm:text-base">JL</span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">Jessica Liu</div>
                      <div className="text-gray-600 text-xs sm:text-sm">Marketing Lead, Consumer Brand</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section - Mobile Optimized */}
          <section id="about" className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">About EMRG Studios</h2>
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg">
                <div className="mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl font-bold text-blue-600">SD</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Shane Delaney</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Founder & Chief Trend Strategist</p>
                </div>
                
                <div className="space-y-4 sm:space-y-6 text-left">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    With experience at Snap Inc., Phony Content, and StockX, I've helped brands generate over 100M views and stay ahead of cultural shifts that drive real business results.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-4 sm:py-6">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">100M+</div>
                      <div className="text-gray-600 text-xs sm:text-sm">Views Generated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">200+</div>
                      <div className="text-gray-600 text-xs sm:text-sm">Brands Helped</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">98%</div>
                      <div className="text-gray-600 text-xs sm:text-sm">Client Satisfaction</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Our mission is simple: help brands catch cultural momentum before it becomes mainstream, turning trends into measurable revenue growth.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section - Mobile Optimized */}
          <section id="contact" className="py-16 sm:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                  Book a free strategy call or send us a message to discuss how we can help your brand stay ahead of the curve
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Contact Options */}
                <div className="bg-gray-50 rounded-3xl p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Let's Talk Strategy</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">Free 30-minute strategy session</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">Custom trend analysis for your industry</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">Actionable recommendations you can implement immediately</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <button 
                      onClick={handleBookCall}
                      className="w-full apple-button bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 touch-manipulation min-h-[48px] flex items-center justify-center text-base"
                    >
                      {isMobile ? (
                        <>
                          <PhoneIcon className="w-5 h-5 mr-2" />
                          Call Now
                        </>
                      ) : (
                        'Book Strategy Call'
                      )}
                    </button>
                    
                    <button 
                      onClick={handleEmailContact}
                      className="w-full apple-button border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all touch-manipulation min-h-[48px] flex items-center justify-center text-base"
                    >
                      <EnvelopeIcon className="w-5 h-5 mr-2" />
                      Send Email
                    </button>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Email:</span>
                          <a href="mailto:shanedelaney11@gmail.com" className="text-blue-600 hover:text-blue-700">
                            shanedelaney11@gmail.com
                          </a>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">LinkedIn:</span>
                          <button 
                            onClick={handleLinkedInContact}
                            className="text-blue-600 hover:text-blue-700"
                          >
                            Connect with Shane
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                  
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="mobile-input w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="mobile-input w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="mobile-input w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                        placeholder="Your company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="mobile-input w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                      >
                        <option value="">Select a service</option>
                        <option value="trend-intelligence">Trend Intelligence</option>
                        <option value="content-strategy">Content Strategy</option>
                        <option value="brand-voice">Brand Voice Development</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        className="mobile-input w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base resize-none"
                        placeholder="Tell us about your project and goals..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full apple-button bg-gray-900 text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 touch-manipulation min-h-[48px] flex items-center justify-center text-base"
                    >
                      <EnvelopeIcon className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      We'll get back to you within 24 hours
                    </p>
                  </form>
                </div>
              </div>
              
              {/* Additional Contact Info */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Usually responds within 2 hours
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Free consultation available
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : currentView === 'service-detail' && currentService ? (
        <ServiceDetailPage 
          service={services[currentService]} 
          onBack={navigateHome}
        />
      ) : null}
    </div>
  );
};

export default App; 