import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Call'>;

const CallScreen: React.FC<Props> = ({ route }) => {
  const { character } = route.params;
  return (
    <View style={styles.container} testID="call-screen">
      <Text style={styles.title}>Calling {character.name}…</Text>
      <Text style={styles.subtitle}>(API integration coming soon)</Text>
    </View>
  );
};

export default CallScreen;

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
    color: '#555',
  },
});
