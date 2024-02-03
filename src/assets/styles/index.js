import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  chatbotContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  chatbotMessage: {
    fontSize: 18,
    margin: 10,
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  homeSubtitle: {
    fontSize: 18,
    margin: 10,
  },
});