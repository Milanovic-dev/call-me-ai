import React from 'react';
import { View, Button, StyleSheet, Platform, Alert } from 'react-native';
import Constants from 'expo-constants';
import ThemedText from '../components/ThemedText';
import useHello from '../hooks/useHello';

/**
 * Landing screen with greeting and platform information.
 */
const HomeScreen: React.FC = () => {
  const message = useHello();

  const handlePress = (): void => {
    Alert.alert(message);
  };

  const sdkVersion = Constants.expoConfig?.sdkVersion ?? 'unknown';

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Call Me AI</ThemedText>
      <ThemedText style={styles.subtitle}>
        {`SDK ${sdkVersion} - ${Platform.OS}`}
      </ThemedText>
      <Button title="Ping AI" onPress={handlePress} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
});
