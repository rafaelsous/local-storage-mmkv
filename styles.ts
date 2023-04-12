import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 32,
    backgroundColor: '#fff',
    gap: 16,
  },
  input: {
    height: 56,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
  },
  button: {
    height: 56,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  }
});