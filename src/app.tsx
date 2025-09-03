import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';

/**
 * Root component of the application.
 */
const App: React.FC = () => (
  <SafeAreaView style={styles.container}>
    <HomeScreen />
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
