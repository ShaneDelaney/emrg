import React, { useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Animated,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import ClientLogo from '../components/ClientLogo';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Header navigation={navigation} />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroSection}>
          <Animated.View 
            style={[
              styles.heroContent, 
              { 
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }] 
              }
            ]}
          >
            <Text style={styles.heroTitle}>Move at the speed of culture.</Text>
            <Text style={styles.heroSubtitle}>
              Trend reports, content audits, and viral concept decks for brands that want to stay ahead.
            </Text>
            <TouchableOpacity 
              style={styles.ctaButton}
              onPress={() => navigation.navigate('Contact')}
            >
              <Text style={styles.ctaButtonText}>Work With Me</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <View style={styles.servicesSection}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          <View style={styles.servicesGrid}>
            <ServiceCard 
              title="Trend Intelligence"
              description="Spotting cultural shifts before they reach the mainstream."
              onPress={() => navigation.navigate('Services')}
            />
            <ServiceCard 
              title="Content Strategy"
              description="Building platform-specific plans that drive visibility, relevance, and action."
              onPress={() => navigation.navigate('Services')}
            />
            <ServiceCard 
              title="Creative Development"
              description="Crafting brand narratives and messaging that stand out and stick."
              onPress={() => navigation.navigate('Services')}
            />
          </View>
        </View>

        <View style={styles.clientsSection}>
          <Text style={styles.sectionTitle}>Trusted By</Text>
          <View style={styles.clientsGrid}>
            <ClientLogo name="Snap Inc." />
            <ClientLogo name="StockX" />
            <ClientLogo name="Phony Content" />
          </View>
        </View>

        <TouchableOpacity 
          style={styles.contactButton}
          onPress={() => navigation.navigate('Contact')}
        >
          <Text style={styles.contactButtonText}>
            Ready to catch what's next? Let's build something that moves culture — and your brand.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    minHeight: 500,
    justifyContent: 'center',
    padding: 20,
  },
  heroContent: {
    maxWidth: 600,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: '700',
    color: '#0f0f0f',
    marginBottom: 16,
    lineHeight: 42,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 32,
    lineHeight: 26,
  },
  ctaButton: {
    backgroundColor: '#0f0f0f',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  ctaButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
    color: '#0f0f0f',
  },
  servicesSection: {
    padding: 20,
    marginTop: 40,
  },
  servicesGrid: {
    flexDirection: 'column',
    gap: 16,
  },
  clientsSection: {
    padding: 20,
    marginTop: 40,
  },
  clientsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  contactButton: {
    margin: 20,
    marginTop: 40,
    marginBottom: 60,
    padding: 24,
    backgroundColor: '#f9f9fb',
    borderRadius: 12,
  },
  contactButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f0f0f',
    textAlign: 'center',
    lineHeight: 26,
  }
});

export default HomeScreen; 