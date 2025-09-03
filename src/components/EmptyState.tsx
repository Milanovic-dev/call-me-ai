import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyState: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Add your first character</Text>
  </View>
);

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
});
