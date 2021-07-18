import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    height: 80,
    backgroundColor: 'red',
  },

  contents: {
    flex: 1,
    backgroundColor: 'green',
  },

  footer: {
    height: 80,
    backgroundColor: 'blue',
  },

  text: {
    fontSize: 25,
  },
});
