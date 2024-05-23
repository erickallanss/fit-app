import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface PrimaryButtonProps {
    onPress: () => void;
    title: string;
    }

const PrimaryButton = ({ onPress, title }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: 48,
    backgroundColor: '#6b3ac7',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default PrimaryButton;
