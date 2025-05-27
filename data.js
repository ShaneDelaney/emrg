// Trend data organized by month
const trendData = {
  "June 2024": {
    emerging: [
      {
        title: "Micro-Mobility Subscriptions",
        description: "Monthly subscriptions for e-bikes and scooters replacing traditional ownership models."
      },
      {
        title: "AI-Generated Recipes",
        description: "Custom recipe creation based on available ingredients and dietary preferences."
      },
      {
        title: "Digital Twin Fashion",
        description: "Virtual replicas of physical clothing items for try-on and social sharing."
      }
    ],
    momentum: [
      {
        title: "Regenerative Travel",
        description: "Tourism that leaves destinations better than they were found through conservation efforts."
      },
      {
        title: "Vertical Farming Appliances",
        description: "Home devices for growing produce year-round regardless of climate."
      },
      {
        title: "Biophilic Office Design",
        description: "Workspaces that incorporate natural elements to improve wellbeing and productivity."
      }
    ],
    mainstream: [
      {
        title: "Plant-Based Seafood",
        description: "Vegan alternatives to fish and shellfish gaining widespread retail distribution."
      },
      {
        title: "Digital Wellness Platforms",
        description: "Apps combining mental health, fitness, and nutrition in personalized programs."
      },
      {
        title: "Sustainable Packaging",
        description: "Compostable and recyclable materials becoming standard across consumer goods."
      }
    ]
  },
  "May 2024": {
    emerging: [
      {
        title: "Haptic Fashion",
        description: "Clothing with embedded sensors that create tactile feedback experiences."
      },
      {
        title: "Circular Beauty",
        description: "Cosmetics brands implementing closed-loop systems for packaging and ingredients."
      },
      {
        title: "Micro-Learning Platforms",
        description: "Bite-sized educational content delivered through short-form video and audio."
      }
    ],
    momentum: [
      {
        title: "Functional Mushrooms",
        description: "Non-psychedelic fungi in foods and supplements for cognitive and immune benefits."
      },
      {
        title: "Virtual Production",
        description: "Real-time 3D environments replacing traditional film sets and green screens."
      },
      {
        title: "Carbon-Labeled Products",
        description: "Items displaying their carbon footprint to inform consumer choices."
      }
    ],
    mainstream: [
      {
        title: "Remote Work Platforms",
        description: "Integrated tools for distributed teams becoming essential business infrastructure."
      },
      {
        title: "Electric Vehicle Charging Networks",
        description: "Widespread installation of charging stations in urban and suburban areas."
      },
      {
        title: "Contactless Payments",
        description: "Touch-free transaction methods now expected by consumers across retail sectors."
      }
    ]
  },
  "April 2024": {
    emerging: [
      {
        title: "Biodesigned Materials",
        description: "Fabrics and packaging grown from microorganisms instead of manufactured."
      },
      {
        title: "Voice Shopping",
        description: "Conversational commerce through smart speakers and voice assistants."
      },
      {
        title: "Digital Fragrance",
        description: "Scent technology that can be transmitted and experienced through devices."
      }
    ],
    momentum: [
      {
        title: "Adaptive Wearables",
        description: "Smart clothing that adjusts to body temperature and environmental conditions."
      },
      {
        title: "Rewilding Projects",
        description: "Urban initiatives to restore native ecosystems and increase biodiversity."
      },
      {
        title: "Personalized Nutrition",
        description: "Diet recommendations based on individual genetic and microbiome profiles."
      }
    ],
    mainstream: [
      {
        title: "Telehealth Services",
        description: "Virtual healthcare consultations becoming a standard option for medical providers."
      },
      {
        title: "Livestream Shopping",
        description: "Real-time video commerce with interactive features now common across platforms."
      },
      {
        title: "Subscription Boxes",
        description: "Curated product deliveries established as a primary retail channel for many brands."
      }
    ]
  },
  "March 2024": {
    emerging: [
      {
        title: "Synthetic Media Creation",
        description: "AI tools for generating realistic images, videos, and audio becoming accessible."
      },
      {
        title: "Vertical Beauty",
        description: "Skincare brands focusing on single, specialized product categories rather than full lines."
      },
      {
        title: "Spatial Audio",
        description: "Three-dimensional sound experiences in music, podcasts, and virtual environments."
      }
    ],
    momentum: [
      {
        title: "Climate Tech",
        description: "Technologies specifically designed to address environmental challenges scaling rapidly."
      },
      {
        title: "Ghost Kitchens",
        description: "Delivery-only food brands operating without traditional restaurant storefronts."
      },
      {
        title: "Digital Collectibles",
        description: "Limited-edition virtual items authenticated through blockchain technology."
      }
    ],
    mainstream: [
      {
        title: "Home Fitness Tech",
        description: "Connected exercise equipment and virtual classes firmly established in fitness routines."
      },
      {
        title: "Plant-Based Meat",
        description: "Vegetable-derived protein alternatives now standard offerings in most restaurants."
      },
      {
        title: "Resale Platforms",
        description: "Secondary marketplaces for fashion and electronics becoming primary shopping destinations."
      }
    ]
  },
  "February 2024": {
    emerging: [
      {
        title: "Augmented Reality Navigation",
        description: "Visual overlays providing contextual information about physical surroundings."
      },
      {
        title: "Circular Fashion",
        description: "Clothing designed for disassembly and recycling at the end of its lifecycle."
      },
      {
        title: "Emotional AI",
        description: "Technology that can recognize and respond to human emotional states."
      }
    ],
    momentum: [
      {
        title: "Vertical Farming",
        description: "Indoor agricultural systems producing food in urban environments with minimal resources."
      },
      {
        title: "Digital Wellness",
        description: "Tools to monitor and improve relationship with technology and screen time."
      },
      {
        title: "Autonomous Delivery",
        description: "Self-driving vehicles and drones for last-mile package and food delivery."
      }
    ],
    mainstream: [
      {
        title: "Remote Collaboration Tools",
        description: "Digital platforms for distributed teams now essential for business operations."
      },
      {
        title: "Streaming Content",
        description: "On-demand video and audio services dominating entertainment consumption."
      },
      {
        title: "Contactless Retail",
        description: "Touch-free shopping experiences becoming standard across retail sectors."
      }
    ]
  },
  "January 2024": {
    emerging: [
      {
        title: "Neurotech Wearables",
        description: "Devices that monitor and potentially enhance brain activity and cognitive function."
      },
      {
        title: "Hyper-Personalized Beauty",
        description: "Custom-formulated skincare and cosmetics based on individual skin analysis."
      },
      {
        title: "Virtual Real Estate",
        description: "Digital land and property in metaverse platforms becoming valuable assets."
      }
    ],
    momentum: [
      {
        title: "Lab-Grown Materials",
        description: "Cultured alternatives to animal-derived products like leather and silk."
      },
      {
        title: "Audio Social Platforms",
        description: "Voice-based social networks focusing on conversation rather than visual content."
      },
      {
        title: "Regenerative Agriculture",
        description: "Farming practices that restore soil health and sequester carbon gaining traction."
      }
    ],
    mainstream: [
      {
        title: "Subscription Services",
        description: "Recurring payment models for products and content firmly established across industries."
      },
      {
        title: "Smart Home Ecosystems",
        description: "Connected devices for home automation becoming standard in new construction."
      },
      {
        title: "Sustainable Fashion",
        description: "Eco-friendly materials and ethical production now expected by mainstream consumers."
      }
    ]
  },
  "December 2023": {
    emerging: [
      {
        title: "Ambient Computing",
        description: "Technology that operates in the background without requiring direct interaction."
      },
      {
        title: "Functional Beverages",
        description: "Drinks formulated with adaptogens, nootropics, and other bioactive compounds."
      },
      {
        title: "Digital Fashion",
        description: "Virtual clothing designed for social media and gaming environments."
      }
    ],
    momentum: [
      {
        title: "Decentralized Finance",
        description: "Blockchain-based alternatives to traditional banking and investment services."
      },
      {
        title: "Virtual Events",
        description: "Digital gatherings with interactive elements replacing physical conferences."
      },
      {
        title: "Circular Economy",
        description: "Business models focused on eliminating waste through product lifecycle design."
      }
    ],
    mainstream: [
      {
        title: "E-Commerce",
        description: "Online shopping now the primary retail channel across most consumer categories."
      },
      {
        title: "Remote Work",
        description: "Distributed workforce models becoming permanent for many organizations."
      },
      {
        title: "Digital Payments",
        description: "Cashless transactions now the standard method for most consumer purchases."
      }
    ]
  },
  "November 2023": {
    emerging: [
      {
        title: "Brain-Computer Interfaces",
        description: "Technology allowing direct communication between the brain and external devices."
      },
      {
        title: "Cellular Agriculture",
        description: "Lab-grown food products created without traditional farming or livestock."
      },
      {
        title: "Spatial Computing",
        description: "Technology that understands and interacts with the physical environment."
      }
    ],
    momentum: [
      {
        title: "Telemedicine",
        description: "Remote healthcare services expanding beyond basic consultations to specialized care."
      },
      {
        title: "Sustainable Packaging",
        description: "Eco-friendly alternatives to plastic gaining widespread adoption in consumer goods."
      },
      {
        title: "Digital Collectibles",
        description: "Virtual items with verified scarcity becoming valuable assets and status symbols."
      }
    ],
    mainstream: [
      {
        title: "Video Conferencing",
        description: "Virtual meetings now standard for both professional and personal communication."
      },
      {
        title: "Food Delivery Apps",
        description: "Mobile platforms for restaurant ordering firmly established in urban markets."
      },
      {
        title: "Streaming Entertainment",
        description: "On-demand content services replacing traditional media distribution channels."
      }
    ]
  },
  "October 2023": {
    emerging: [
      {
        title: "Synthetic Biology",
        description: "Engineering biological systems to create new materials and solve environmental problems."
      },
      {
        title: "Voice Commerce",
        description: "Shopping through smart speakers and voice assistants without visual interfaces."
      },
      {
        title: "Digital Twins",
        description: "Virtual replicas of physical objects used for simulation and optimization."
      }
    ],
    momentum: [
      {
        title: "Plant-Based Alternatives",
        description: "Vegetable-derived substitutes for animal products expanding beyond meat to dairy and eggs."
      },
      {
        title: "Augmented Reality",
        description: "Digital overlays on physical environments for retail, education, and entertainment."
      },
      {
        title: "Micro-Mobility",
        description: "Electric scooters and bikes for short-distance urban transportation."
      }
    ],
    mainstream: [
      {
        title: "Remote Work Tools",
        description: "Digital platforms for distributed teams now essential business infrastructure."
      },
      {
        title: "Contactless Payments",
        description: "Touch-free transaction methods expected by consumers across retail sectors."
      },
      {
        title: "Subscription Content",
        description: "Recurring payment models for entertainment firmly established across platforms."
      }
    ]
  },
  "September 2023": {
    emerging: [
      {
        title: "Quantum Computing Applications",
        description: "Early commercial uses of quantum processing for specific industry problems."
      },
      {
        title: "Biodesigned Materials",
        description: "Textiles and packaging grown from microorganisms rather than manufactured."
      },
      {
        title: "Emotional AI",
        description: "Technology that can recognize and respond to human emotional states."
      }
    ],
    momentum: [
      {
        title: "Virtual Reality Fitness",
        description: "Immersive exercise experiences combining gaming elements with physical activity."
      },
      {
        title: "Regenerative Agriculture",
        description: "Farming practices that restore soil health and sequester carbon."
      },
      {
        title: "Digital Health Platforms",
        description: "Integrated services combining telemedicine, monitoring, and health records."
      }
    ],
    mainstream: [
      {
        title: "E-Commerce",
        description: "Online shopping now the primary retail channel across most consumer categories."
      },
      {
        title: "Streaming Media",
        description: "On-demand content services replacing traditional distribution for entertainment."
      },
      {
        title: "Remote Collaboration",
        description: "Digital tools for distributed teams now standard for business operations."
      }
    ]
  },
  "August 2023": {
    emerging: [
      {
        title: "Spatial Audio",
        description: "Three-dimensional sound experiences in music, podcasts, and virtual environments."
      },
      {
        title: "Vertical Beauty",
        description: "Skincare brands focusing on single, specialized product categories rather than full lines."
      },
      {
        title: "Digital Fashion",
        description: "Virtual clothing designed for social media and gaming environments."
      }
    ],
    momentum: [
      {
        title: "Ghost Kitchens",
        description: "Delivery-only food brands operating without traditional restaurant storefronts."
      },
      {
        title: "Circular Economy",
        description: "Business models focused on eliminating waste through product lifecycle design."
      },
      {
        title: "Personalized Nutrition",
        description: "Diet recommendations based on individual genetic and microbiome profiles."
      }
    ],
    mainstream: [
      {
        title: "Remote Work",
        description: "Distributed workforce models becoming permanent for many organizations."
      },
      {
        title: "Plant-Based Meat",
        description: "Vegetable-derived protein alternatives now standard offerings in most restaurants."
      },
      {
        title: "Digital Payments",
        description: "Cashless transactions now the standard method for most consumer purchases."
      }
    ]
  },
  "July 2023": {
    emerging: [
      {
        title: "Augmented Reality Navigation",
        description: "Visual overlays providing contextual information about physical surroundings."
      },
      {
        title: "Functional Beverages",
        description: "Drinks formulated with adaptogens, nootropics, and other bioactive compounds."
      },
      {
        title: "Synthetic Media",
        description: "AI-generated content including realistic images, videos, and audio."
      }
    ],
    momentum: [
      {
        title: "Vertical Farming",
        description: "Indoor agricultural systems producing food in urban environments with minimal resources."
      },
      {
        title: "Digital Wellness",
        description: "Tools to monitor and improve relationship with technology and screen time."
      },
      {
        title: "Autonomous Delivery",
        description: "Self-driving vehicles and drones for last-mile package and food delivery."
      }
    ],
    mainstream: [
      {
        title: "Telehealth",
        description: "Virtual healthcare consultations becoming a standard option for medical providers."
      },
      {
        title: "Subscription Services",
        description: "Recurring payment models for products and content firmly established across industries."
      },
      {
        title: "Smart Home Technology",
        description: "Connected devices for home automation becoming standard in new construction."
      }
    ]
  }
};

// Generate past 12 months for dropdown
function generatePastMonths(count = 12) {
  const months = [];
  const currentDate = new Date();
  
  for (let i = 0; i < count; i++) {
    const date = new Date(currentDate);
    date.setMonth(currentDate.getMonth() - i);
    
    const monthName = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const monthYear = `${monthName} ${year}`;
    
    months.push(monthYear);
  }
  
  return months;
}

const availableMonths = generatePastMonths(); 