// Mock trend data service
const trendData = [
  {
    id: '1',
    title: 'Sustainable Fashion',
    category: 'Fashion',
    description: 'Eco-friendly clothing and accessories made from recycled materials.',
    growthRate: 34,
    mentions: 245,
    imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b',
    details: {
      origin: 'Growing environmental awareness',
      platforms: ['Instagram', 'TikTok'],
      demographics: 'Gen Z and Millennials',
      relatedBrands: ['Patagonia', 'Reformation', 'Everlane']
    }
  },
  {
    id: '2',
    title: 'AI-Generated Content',
    category: 'Technology',
    description: 'Content created using artificial intelligence tools like GPT-4 and DALL-E.',
    growthRate: 78,
    mentions: 512,
    imageUrl: 'https://images.unsplash.com/photo-1677442135968-6054f8c4b67c',
    details: {
      origin: 'Advancements in AI technology',
      platforms: ['Twitter', 'LinkedIn', 'YouTube'],
      demographics: 'Tech professionals and creators',
      relatedBrands: ['OpenAI', 'Midjourney', 'Runway']
    }
  },
  {
    id: '3',
    title: 'Y2K Revival',
    category: 'Fashion',
    description: 'Early 2000s fashion making a comeback with low-rise jeans and baby tees.',
    growthRate: 45,
    mentions: 189,
    imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b',
    details: {
      origin: 'Nostalgia among Gen Z',
      platforms: ['TikTok', 'Instagram'],
      demographics: 'Teens and young adults',
      relatedBrands: ['Juicy Couture', 'Von Dutch', 'Ed Hardy']
    }
  },
  {
    id: '4',
    title: 'Plant-Based Foods',
    category: 'Food',
    description: 'Meat alternatives and plant-based diets gaining mainstream popularity.',
    growthRate: 29,
    mentions: 176,
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    details: {
      origin: 'Health and environmental concerns',
      platforms: ['Instagram', 'Pinterest', 'TikTok'],
      demographics: 'Health-conscious consumers',
      relatedBrands: ['Beyond Meat', 'Impossible Foods', 'Oatly']
    }
  },
  {
    id: '5',
    title: 'Cottagecore Aesthetic',
    category: 'Entertainment',
    description: 'Romanticized interpretation of rural life featuring gardens, baking, and crafts.',
    growthRate: 22,
    mentions: 134,
    imageUrl: 'https://images.unsplash.com/photo-1595349480766-68a9b6ad1a64',
    details: {
      origin: 'Desire for simpler lifestyle during pandemic',
      platforms: ['TikTok', 'Instagram', 'Pinterest'],
      demographics: 'Young women 18-30',
      relatedBrands: ['Free People', 'Anthropologie', 'Urban Outfitters']
    }
  }
];

// Function to get trends by date
export const getTrendsByDate = async (date) => {
  // In a real app, this would make an API call with the date parameter
  // For this mock, we'll return different subsets based on month
  
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      const month = date.getMonth();
      const year = date.getFullYear();
      const currentYear = new Date().getFullYear();
      
      // Return different trends based on the selected month and year
      if (year === currentYear) {
        if (month < 3) {
          resolve(trendData.slice(0, 3));
        } else if (month < 6) {
          resolve(trendData.slice(1, 4));
        } else if (month < 9) {
          resolve(trendData.slice(2, 5));
        } else {
          resolve(trendData);
        }
      } else if (year === currentYear - 1) {
        if (month % 2 === 0) {
          resolve(trendData.slice(0, 2).concat(trendData.slice(3, 5)));
        } else {
          resolve(trendData.slice(1, 4));
        }
      } else {
        // Older years have fewer trends
        resolve(trendData.slice(0, 2));
      }
    }, 1000);
  });
};

// Function to get trend details by ID
export const getTrendById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trend = trendData.find(t => t.id === id);
      if (trend) {
        resolve(trend);
      } else {
        reject(new Error('Trend not found'));
      }
    }, 500);
  });
};

// Function to get related trends
export const getRelatedTrends = async (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const related = trendData.filter(t => 
        t.category.toLowerCase() === category.toLowerCase()
      ).slice(0, 3);
      resolve(related);
    }, 800);
  });
}; 