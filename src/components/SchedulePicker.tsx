import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { TimeUnit } from '../types/domain';

interface Props {
  unit: TimeUnit;
  onChange: (unit: TimeUnit) => void;
}

const SchedulePicker: React.FC<Props> = ({ unit, onChange }) => (
  <Picker
    selectedValue={unit}
    onValueChange={(value) => onChange(value as TimeUnit)}
    testID="form-unit-picker"
  >
    <Picker.Item label="seconds" value="seconds" />
    <Picker.Item label="minutes" value="minutes" />
    <Picker.Item label="hours" value="hours" />
  </Picker>
);

export default SchedulePicker;
