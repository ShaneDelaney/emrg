import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import TrendExplorerScreen from './screens/TrendExplorerScreen';
import TrendInsightsScreen from './screens/TrendInsightsScreen';
import SavedTrendsScreen from './screens/SavedTrendsScreen';
import ProfileScreen from './screens/ProfileScreen';

// Import components
import SplashScreen from './components/SplashScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Explore') {
                iconName = focused ? 'compass' : 'compass-outline';
              } else if (route.name === 'Insights') {
                iconName = focused ? 'analytics' : 'analytics-outline';
              } else if (route.name === 'Saved') {
                iconName = focused ? 'bookmark' : 'bookmark-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#4d61fc',
            tabBarInactiveTintColor: '#666666',
            tabBarStyle: {
              paddingVertical: 5,
              borderTopWidth: 0,
              elevation: 10,
              shadowOpacity: 0.1,
              shadowRadius: 10,
            }
          })}
        >
          <Tab.Screen name="Explore" component={TrendExplorerScreen} />
          <Tab.Screen name="Insights" component={TrendInsightsScreen} />
          <Tab.Screen name="Saved" component={SavedTrendsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

document.addEventListener('DOMContentLoaded', function() {
  // DOM elements
  const monthSelector = document.getElementById('month-selector');
  const currentMonthDisplay = document.getElementById('current-month');
  const monthDropdown = document.getElementById('month-dropdown');
  const monthGrid = document.querySelector('.month-grid');
  const trendCategories = document.querySelectorAll('.trend-category');
  
  // Initialize with current month
  let selectedMonth = availableMonths[0]; // Current month
  currentMonthDisplay.textContent = selectedMonth;
  
  // Populate month dropdown
  populateMonthDropdown();
  
  // Load initial trends
  loadTrends(selectedMonth);
  
  // Show trend categories with staggered animation
  setTimeout(() => {
    trendCategories.forEach((category, index) => {
      setTimeout(() => {
        category.classList.add('visible');
      }, index * 100);
    });
  }, 300);
  
  // Event listeners
  monthSelector.addEventListener('click', toggleMonthDropdown);
  document.addEventListener('click', function(event) {
    if (!monthSelector.contains(event.target) && !monthDropdown.contains(event.target)) {
      closeMonthDropdown();
    }
  });
  
  // Functions
  function populateMonthDropdown() {
    monthGrid.innerHTML = '';
    
    availableMonths.forEach(month => {
      const monthItem = document.createElement('div');
      monthItem.classList.add('month-item');
      if (month === selectedMonth) {
        monthItem.classList.add('active');
      }
      monthItem.textContent = month;
      
      monthItem.addEventListener('click', () => {
        selectMonth(month);
      });
      
      monthGrid.appendChild(monthItem);
    });
  }
  
  function toggleMonthDropdown() {
    monthSelector.classList.toggle('active');
    monthDropdown.classList.toggle('active');
  }
  
  function closeMonthDropdown() {
    monthSelector.classList.remove('active');
    monthDropdown.classList.remove('active');
  }
  
  function selectMonth(month) {
    selectedMonth = month;
    currentMonthDisplay.textContent = month;
    closeMonthDropdown();
    
    // Clear existing trends
    document.querySelectorAll('.trend-items').forEach(container => {
      container.innerHTML = '';
    });
    
    // Load new trends with animation
    loadTrends(month);
    
    // Update active state in dropdown
    document.querySelectorAll('.month-item').forEach(item => {
      item.classList.toggle('active', item.textContent === month);
    });
  }
  
  function loadTrends(month) {
    if (!trendData[month]) {
      console.error(`No trend data for ${month}`);
      return;
    }
    
    const categories = ['emerging', 'momentum', 'mainstream'];
    
    categories.forEach(category => {
      const container = document.querySelector(`#${category} .trend-items`);
      container.innerHTML = '';
      
      if (trendData[month][category]) {
        trendData[month][category].forEach((trend, index) => {
          const trendItem = document.createElement('div');
          trendItem.classList.add('trend-item');
          
          trendItem.innerHTML = `
            <h4 class="trend-title">${trend.title}</h4>
            <p class="trend-description">${trend.description}</p>
          `;
          
          container.appendChild(trendItem);
          
          // Staggered animation for trend items
          setTimeout(() => {
            trendItem.classList.add('visible');
          }, 300 + (index * 100));
        });
      }
    });
  }
}); 