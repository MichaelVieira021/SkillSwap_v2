import { Dimensions, StyleSheet } from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const styles = StyleSheet.create({
  backgroundCadastro: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tituloCadastro: {
    fontSize: 65,
    fontFamily: 'DevilCandle',
    fontWeight: '600',
    color: "white",
    // marginBottom: 15,
    marginTop: 79,

    textShadowColor: 'rgba(0, 0, 0, 0.7)', // Cor da sombra
    textShadowOffset: { width: 10, height: 10 }, // Offset da sombra (horizontal, vertical)
    textShadowRadius: 5,
  },

  containerFormularioCadastroCompleto: {
    width: '95%',
    maxWidth: 400,
    // height: 550, Dimensions.get('window')
    height: Dimensions.get('window').height,
    alignItems: 'center',
  },

  containerFormularioCadastro:{
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    // backgroundColor: '#010216',
    // border: '1px solid white',
    padding: 9,
  },

  containerInputs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },

  containerCadastroButtons: {
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
    // Sombra para dispositivos Android
    // elevation: 5, // Ajuste conforme necessário

    // Sombra para dispositivos iOS
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
  },

  botaoCadastroText: {
    fontSize: 28,
    // fontWeight: 'bold',
    // color: "#261038"
    color: '#ffffff'
  },

  botaoCadastrar: {
    alignItems: "center",
    width: "100%",
    padding: 5,
    borderRadius: 100,
    // backgroundColor: "#00000075"
  },

  botaoCadastrarText: {
    color: 'white',
    fontSize: 22,
  },

  gravadorDeSenha: {
    flex: 1,
    marginLeft: -25,
    marginTop: -10,
    alignSelf: 'flex-start'
  }
});
