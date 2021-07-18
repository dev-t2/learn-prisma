import { StyleSheet } from 'react-native';

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export const textStyles = StyleSheet.create({
  text: { padding: 10, fontSize: 25, fontWeight: '600', color: 'black' },
  error: { color: 'red' },
});
