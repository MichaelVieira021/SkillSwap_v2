import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputLogin: {
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
  },
  
  input: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
    // borderColor: 'rgba(255, 255, 255, 0.5)',
    // backgroundColor: '#261038',
    backgroundColor: '#ffffff',
    color: 'rgb(2, 2, 2)',
    height: 40,
    fontSize: 24,
    marginBottom: 15,
    paddingLeft: 45,
    width: '100%',
    padding: 25
  },
});

export default styles;
