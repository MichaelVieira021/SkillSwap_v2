import { Dimensions, StyleSheet } from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const styles = StyleSheet.create({
  backgroundLogin: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tituloLogin: {
    fontSize: 65,
    fontFamily: 'DevilCandle',
    fontWeight: '600',
    color: "white",
    marginTop: 79,

    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 10, height: 10 },
    textShadowRadius: 5,
  },

  containerFormularioLoginCompleto: {
    width: '95%',
    maxWidth: 400,
    height: Dimensions.get('window').height,
    alignItems: 'center',
  },

  containerFormularioLogin:{
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    padding: 9,
  },

  containerInputs: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },

  containerLoginButtons: {
    alignItems: 'center',
    width: "100%",
  },

  containerInputsButton: {
    width: 290,
    height: 65,
    borderRadius: 100,
    backgroundColor: "#700000",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    border: '1px solid white'
  },

  botaoLoginText: {
    fontSize: 28,
    color: "#ffffff"
  },

  botaoCadastrar: {
    alignItems: "center",
    width: "100%",
    padding: 5,
    borderRadius: 100,
  },

  botaoCadastrarText: {
    color: 'white',
    fontSize: 22,
  },

  gravadorDeSenha: {
    flex: 1,
    marginLeft: -20,
    marginTop: -10,
    alignSelf: 'flex-start'
  },
});
