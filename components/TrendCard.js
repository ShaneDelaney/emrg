import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TrendCard = ({ trend, onPress }) => {
  const getCategoryIcon = (category) => {
    switch(category.toLowerCase()) {
      case 'social media':
        return 'logo-twitter';
      case 'fashion':
        return 'shirt-outline';
      case 'technology':
        return 'hardware-chip-outline';
      case 'entertainment':
        return 'film-outline';
      case 'music':
        return 'musical-notes-outline';
      case 'food':
        return 'restaurant-outline';
      default:
        return 'trending-up-outline';
    }
  };

  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.9}
    >
      {trend.imageUrl ? (
        <Image 
          source={{ uri: trend.imageUrl }} 
          style={styles.trendImage}
          resizeMode="cover"
        />
      ) : (
        <View style={[styles.trendImage, styles.placeholderImage]}>
          <Ionicons 
            name={getCategoryIcon(trend.category)} 
            size={40} 
            color="#e0e0e0" 
          />
        </View>
      )}
      
      <View style={styles.cardContent}>
        <View style={styles.categoryContainer}>
          <Ionicons 
            name={getCategoryIcon(trend.category)} 
            size={14} 
            color="#4d61fc" 
          />
          <Text style={styles.categoryText}>{trend.category}</Text>
        </View>
        
        <Text style={styles.trendTitle}>{trend.title}</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Ionicons name="trending-up" size={16} color="#666666" />
            <Text style={styles.statText}>{trend.growthRate}%</Text>
          </View>
          
          <View style={styles.statItem}>
            <Ionicons name="eye-outline" size={16} color="#666666" />
            <Text style={styles.statText}>{trend.mentions}k</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    overflow: 'hidden',
  },
  trendImage: {
    width: '100%',
    height: 160,
    backgroundColor: '#f9f9fb',
  },
  placeholderImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    padding: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    color: '#4d61fc',
    marginLeft: 4,
    fontWeight: '500',
  },
  trendTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f0f0f',
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 4,
  }
});

export default TrendCard; 