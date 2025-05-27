import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  TextInput,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MonthSelector from '../components/MonthSelector';
import TrendCard from '../components/TrendCard';
import { getTrendsByDate } from '../services/trendService';

const { width } = Dimensions.get('window');

const TrendExplorerScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [trends, setTrends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadTrends(selectedDate);
  }, [selectedDate]);

  const loadTrends = async (date) => {
    setIsLoading(true);
    try {
      const trendData = await getTrendsByDate(date);
      setTrends(trendData);
    } catch (error) {
      console.error('Error loading trends:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    setDatePickerVisible(false);
  };

  const handleMonthSelect = (month, year) => {
    const newDate = new Date(year, month, 1);
    setSelectedDate(newDate);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const filteredTrends = searchQuery 
    ? trends.filter(trend => 
        trend.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trend.category.toLowerCase().includes(searchQuery.toLowerCase()))
    : trends;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trend Tracker</Text>
        <TouchableOpacity 
          style={styles.dateSelector}
          onPress={() => setDatePickerVisible(true)}
        >
          <Text style={styles.dateText}>{formatDate(selectedDate)}</Text>
          <Ionicons name="calendar-outline" size={20} color="#4d61fc" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search trends..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery ? (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={20} color="#666666" />
          </TouchableOpacity>
        ) : null}
      </View>
      
      <MonthSelector 
        selectedDate={selectedDate}
        onSelectMonth={handleMonthSelect}
      />
      
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4d61fc" />
          <Text style={styles.loadingText}>Loading trends...</Text>
        </View>
      ) : (
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {filteredTrends.length > 0 ? (
            <View style={styles.trendsGrid}>
              {filteredTrends.map(trend => (
                <TrendCard 
                  key={trend.id}
                  trend={trend}
                  onPress={() => navigation.navigate('Insights', { trendId: trend.id })}
                />
              ))}
            </View>
          ) : (
            <View style={styles.emptyState}>
              <Ionicons name="trending-up" size={60} color="#e0e0e0" />
              <Text style={styles.emptyStateText}>
                {searchQuery 
                  ? "No trends match your search" 
                  : "No trends found for this period"}
              </Text>
              <TouchableOpacity 
                style={styles.refreshButton}
                onPress={() => loadTrends(selectedDate)}
              >
                <Text style={styles.refreshButtonText}>Refresh</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      )}
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={() => setDatePickerVisible(false)}
        date={selectedDate}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f0f0f',
    marginBottom: 10,
  },
  dateSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9fb',
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9fb',
    margin: 20,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  scrollView: {
    flex: 1,
  },
  trendsGrid: {
    padding: 20,
    paddingTop: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666666',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginTop: 60,
  },
  emptyStateText: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  refreshButton: {
    backgroundColor: '#4d61fc',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  refreshButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  }
});

export default TrendExplorerScreen; 