import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Character } from '../types/domain';

interface Props {
  character: Character;
  onEdit: (character: Character) => void;
  onDelete: (character: Character) => void;
  onCall: (character: Character) => void;
}

const CharacterCard: React.FC<Props> = ({
  character,
  onEdit,
  onDelete,
  onCall,
}) => {
  const initial = character.name.trim().charAt(0).toUpperCase();
  return (
    <View style={styles.card} testID={`character-card-${character.id}`}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initial}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.schedule}>
          Scheduled: {character.schedule.value} {character.schedule.unit}
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => onCall(character)}
          accessibilityLabel={`Call ${character.name}`}
        >
          <Ionicons name="call-outline" size={24} color="#007aff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onEdit(character)}
          accessibilityLabel={`Edit ${character.name}`}
          style={styles.action}
        >
          <Ionicons name="create-outline" size={24} color="#007aff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onDelete(character)}
          accessibilityLabel={`Delete ${character.name}`}
        >
          <Ionicons name="trash-outline" size={24} color="#ff3b30" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007aff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  schedule: {
    fontSize: 14,
    color: '#555',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  action: {
    marginHorizontal: 8,
  },
});
