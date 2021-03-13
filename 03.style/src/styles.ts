import { Platform, StyleSheet } from 'react-native';

export const viewStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
});

export const textStyles = StyleSheet.create({
  text: { padding: 10, fontSize: 26, fontWeight: '600', color: 'black' },
});

export const ShadowBoxStyles = StyleSheet.create({
  shadow: {
    backgroundColor: '#fff',
    width: 200,
    height: 200,

    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
    }),
  },
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
