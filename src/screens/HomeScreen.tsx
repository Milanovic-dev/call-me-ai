import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useCharactersStore } from '../store/charactersStore';
import CharacterCard from '../components/CharacterCard';
import CharacterFormModal from '../components/CharacterFormModal';
import EmptyState from '../components/EmptyState';
import { Character } from '../types/domain';
import { scheduleToMs } from '../lib/time';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const characters = useCharactersStore((s) => s.characters);
  const load = useCharactersStore((s) => s.load);
  const add = useCharactersStore((s) => s.add);
  const update = useCharactersStore((s) => s.update);
  const remove = useCharactersStore((s) => s.remove);

  const [modalVisible, setModalVisible] = useState(false);
  const [editing, setEditing] = useState<Character | undefined>(undefined);

  React.useEffect(() => {
    load();
  }, [load]);

  const handleSave = async (character: Character): Promise<void> => {
    if (editing) {
      await update(character);
    } else {
      await add(character);
    }
    setModalVisible(false);
    setEditing(undefined);
  };

  const handleDelete = (character: Character): void => {
    Alert.alert('Delete Character', `Delete ${character.name}?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await remove(character.id);
        },
      },
    ]);
  };

  const handleCall = (character: Character): void => {
    navigation.navigate('Call', { character });
    const ms = scheduleToMs(character.schedule);
    setTimeout(() => {
      Alert.alert('Incoming call', `Incoming call from ${character.name}`);
    }, ms);
  };

  const openAdd = (): void => {
    setEditing(undefined);
    setModalVisible(true);
  };

  const openEdit = (character: Character): void => {
    setEditing(character);
    setModalVisible(true);
  };

  const renderItem = ({ item }: { item: Character }): React.ReactElement => (
    <CharacterCard
      character={item}
      onEdit={openEdit}
      onDelete={handleDelete}
      onCall={handleCall}
    />
  );

  return (
    <View style={styles.container}>
      {characters.length === 0 ? (
        <EmptyState />
      ) : (
        <FlatList
          data={characters}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      )}
      <TouchableOpacity
        style={styles.addButton}
        onPress={openAdd}
        accessibilityLabel="Add Character"
        testID="home-add-btn"
      >
        <Ionicons name="add-circle" size={56} color="#007aff" />
      </TouchableOpacity>
      <CharacterFormModal
        visible={modalVisible}
        initial={editing}
        onSave={handleSave}
        onClose={() => {
          setModalVisible(false);
          setEditing(undefined);
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
  },
  addButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});
