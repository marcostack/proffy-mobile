import { StyleSheet } from 'react-native';

const primaryColor = '#8257e5';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    justifyContent: "center",
    padding: 40
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#FFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold'
  },

  buttonsContainer: {
    flexDirection:'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  button: {
    height: 140,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between'
  },

  buttonPrimary: {
    backgroundColor: '#9871f5',
  },

  buttonSecondary: {
    backgroundColor: '#04d361',
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 16
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#d4c2ff',
    lineHeight: 20,
    maxWidth: 160,
    marginTop: 20
  },
});

export default styles;
