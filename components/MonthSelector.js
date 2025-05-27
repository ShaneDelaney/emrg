import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const MonthSelector = ({ selectedDate, onSelectMonth }) => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear - 1, currentYear - 2];
  
  const selectedMonth = selectedDate.getMonth();
  const selectedYear = selectedDate.getFullYear();

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {years.map(year => (
          <View key={year} style={styles.yearContainer}>
            <Text style={styles.yearLabel}>{year}</Text>
            <View style={styles.monthsRow}>
              {months.map((month, index) => (
                <TouchableOpacity
                  key={`${year}-${index}`}
                  style={[
                    styles.monthButton,
                    selectedMonth === index && selectedYear === year && styles.selectedMonth
                  ]}
                  onPress={() => onSelectMonth(index, year)}
                >
                  <Text 
                    style={[
                      styles.monthText,
                      selectedMonth === index && selectedYear === year && styles.selectedMonthText
                    ]}
                  >
                    {month}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  yearContainer: {
    marginRight: 20,
  },
  yearLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 10,
  },
  monthsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 240,
  },
  monthButton: {
    width: 60,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: 8,
  },
  selectedMonth: {
    backgroundColor: '#4d61fc',
  },
  monthText: {
    fontSize: 14,
    color: '#666666',
  },
  selectedMonthText: {
    color: '#FFFFFF',
    fontWeight: '600',
  }
});

export default MonthSelector; 