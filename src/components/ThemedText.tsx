import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

interface ThemedTextProps extends TextProps {
  color?: string;
}

/**
 * Text component that applies theme colors.
 */
const ThemedText: React.FC<ThemedTextProps> = ({
  style,
  color = colors.text,
  children,
  ...props
}) => (
  <Text style={[styles.text, { color }, style]} {...props}>
    {children}
  </Text>
);

export default ThemedText;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
