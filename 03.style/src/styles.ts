import { StyleSheet } from 'react-native';

export const viewStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
});

export const textStyles = StyleSheet.create({
  text: { padding: 10, fontSize: 26, fontWeight: '600', color: 'black' },
});

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 80,
    backgroundColor: '#f1c40f',
  },
  contents: {
    flex: 1,
    backgroundColor: '#1abc9c',
  },
  footer: {
    height: 80,
    backgroundColor: '#3498db',
  },
  text: {
    fontSize: 26,
  },
});
