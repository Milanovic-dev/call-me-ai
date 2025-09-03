import AsyncStorage from '@react-native-async-storage/async-storage';
import { Character } from '../types/domain';

const STORAGE_KEY = 'characters';

export const loadCharacters = async (): Promise<Character[]> => {
  const json = await AsyncStorage.getItem(STORAGE_KEY);
  return json ? (JSON.parse(json) as Character[]) : [];
};

export const saveCharacters = async (chars: Character[]): Promise<void> => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(chars));
};
