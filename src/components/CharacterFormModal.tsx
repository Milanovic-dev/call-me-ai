import React, { useEffect, useState } from 'react';
import {
  Modal,
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { Character, TimeUnit } from '../types/domain';
import SchedulePicker from './SchedulePicker';

interface Props {
  visible: boolean;
  initial?: Character;
  onSave: (character: Character) => void;
  onClose: () => void;
}

const CharacterFormModal: React.FC<Props> = ({
  visible,
  initial,
  onSave,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [unit, setUnit] = useState<TimeUnit>('seconds');

  useEffect(() => {
    if (initial) {
      setName(initial.name);
      setValue(String(initial.schedule.value));
      setUnit(initial.schedule.unit);
    } else {
      setName('');
      setValue('');
      setUnit('seconds');
    }
  }, [initial, visible]);

  const valueNum = parseInt(value, 10);
  const isValidName = name.trim().length > 0;
  const isValidValue = Number.isInteger(valueNum) && valueNum >= 1;
  const canSave = isValidName && isValidValue;

  const handleSave = (): void => {
    if (!canSave) return;
    const character: Character = {
      id: initial?.id ?? uuidv4(),
      name: name.trim(),
      schedule: { value: valueNum, unit },
    };
    onSave(character);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            autoFocus={!initial}
            testID="form-name-input"
          />
          {!isValidName && <Text style={styles.error}>Name is required</Text>}
          <TextInput
            style={styles.input}
            placeholder="Delay"
            value={value}
            onChangeText={setValue}
            keyboardType="number-pad"
            testID="form-value-input"
          />
          {!isValidValue && (
            <Text style={styles.error}>Enter a number ≥ 1</Text>
          )}
          <SchedulePicker unit={unit} onChange={setUnit} />
          <View style={styles.buttons}>
            <TouchableOpacity onPress={onClose} style={styles.button}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSave}
              disabled={!canSave}
              style={[styles.button, !canSave && styles.buttonDisabled]}
              testID="form-save-btn"
            >
              <Text>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CharacterFormModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  error: {
    color: '#ff3b30',
    marginBottom: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});
