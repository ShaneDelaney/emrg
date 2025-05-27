import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, PlayIcon, CheckIcon } from '@heroicons/react/24/outline';

const EMRGStudioLanding = () => {
  const [isVisible, setIsVisible] = useState({});
  const [email, setEmail] = useState('');

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold tracking-tight">
              EMRG Studio
            </div>
            <button 
              onClick={() => scrollToSection('kit')}
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Get the Kit
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-8">
            Turn Trends Into
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Storytelling That Scales
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            EMRG Studio is a trend-powered content lab helping creators and brands 
            ride culture in real time.
          </p>
          <button 
            onClick={() => scrollToSection('kit')}
            className="bg-black text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get the Kit
          </button>
          
          {/* Scroll indicator */}
          <div className="mt-20 flex justify-center">
            <ChevronDownIcon 
              className="w-6 h-6 text-gray-400 animate-bounce cursor-pointer"
              onClick={() => scrollToSection('services')}
            />
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section 
        id="services" 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
        data-animate
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three ways to stay ahead of the curve and create content that connects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Trend Kits",
                description: "Monthly drop of emerging social trends, formats, and angles",
                icon: "📊",
                delay: "delay-0"
              },
              {
                title: "Script & Copy Packages",
                description: "Viral-ready stories for creators and brand campaigns",
                icon: "✍️",
                delay: "delay-200"
              },
              {
                title: "Custom Consulting",
                description: "1-on-1 creative strategy for UGC, TikTok, Snap, and IG",
                icon: "🎯",
                delay: "delay-400"
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group ${
                  isVisible.services ? `opacity-100 translate-y-0 ${service.delay}` : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Kit - Featured Product */}
      <section 
        id="kit" 
        className="py-20 px-4 sm:px-6 lg:px-8"
        data-animate
      >
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.kit ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">The Kit</h2>
            <p className="text-xl text-gray-600">Everything you need to create viral content</p>
          </div>

          <div className={`bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 sm:p-12 text-white transition-all duration-1000 delay-300 ${
            isVisible.kit ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                  The Viral Content Starter Kit
                </h3>
                <div className="space-y-4 mb-8">
                  {[
                    "3 short-form video scripts",
                    "10 trending audios",
                    "5 content ideas"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckIcon className="w-5 h-5 text-green-400" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-6">
                  <span className="text-4xl font-bold">$99</span>
                  <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-200">
                    Download Now
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="space-y-4">
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                    <div className="h-4 bg-white/20 rounded w-1/2"></div>
                    <div className="h-4 bg-white/20 rounded w-2/3"></div>
                    <div className="mt-6 flex space-x-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We've Worked With */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
        data-animate
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${
            isVisible['who-worked-with'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-gray-600 mb-8 text-lg">Trusted by creators and brands shaping the future of digital storytelling</p>
            <div className="flex justify-center items-center space-x-12 text-2xl font-semibold text-gray-400">
              <span>Snap Inc.</span>
              <span>StockX</span>
              <span>Phony Content</span>
            </div>
          </div>
        </div>
      </section>

      {/* About EMRG Studio */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        data-animate
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${
            isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">About EMRG Studio</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Led by Shane Delaney, a trend curator and viral storyteller who's helped launch 
              Snap Spotlight campaigns and creative activations for some of the most-watched 
              stories online.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-6">Want weekly trend drops?</h3>
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
              <div className="flex space-x-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Join
                </button>
              </div>
            </form>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-xl font-semibold">EMRG Studio</div>
              <div className="flex space-x-6">
                <a href="#" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Portfolio</a>
              </div>
              <div className="text-white/60">© EMRG Studio 2025</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EMRGStudioLanding; 