import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  paginaHomeListSkillUser: {
    backgroundColor: '#000000',
    marginTop: 0,
    flex:1,
    flexDirection: 'column'
  },

  tituloListaDeSkills: {
    fontSize: 46,
    color: 'white',
    marginTop: 8,
    // fontFamily: 'fontSkillSwap',
    alignItems: 'center',
    textAlign: 'center',
  },

  tituloLogin: {
    fontSize: 65,
    fontFamily: 'DevilCandle',
    fontWeight: '600',
    color: "white",
    marginTop: 9,
    borderBottomWidth:1,
    borderBottomColor: 'white',

    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 10, height: 10 },
    textShadowRadius: 5,
  },

  containerPrincipal: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '../../assets/img/backgroundList.png',
    alignItems: 'center',
    width: '100%',
    height: 500,
  },

  containerListaDeSkillsUser: {
    width: '100%',
    height: 410,
    minHeight: 410,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttonAddSkill: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(27, 20, 39)',
    color: '#6d5223',
    width: '100%',
    fontSize: 16,
    fontFamily: 'fontSkillSwap',
  },

  visualizarTodasSkills: {
    marginTop: 10,
    width: '100%',
    maxHeight: 350,
  },
  

  ModalObterSkill: {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // flex: 1,
    // justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    // // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // // display: 'flex',
    // // flexDirection: 'column',
    width: '90%',
    // height:"70%",
    backgroundColor: 'rgb(255, 255, 255)',
    // boxShadow: '2px 2px 24px black',
    borderRadius: 20,
    // // alignItems: 'center',
  },

  tituloModalObterSkill: {
    fontFamily: 'fontSkillSwap',
    fontSize: 70,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },

  inputNumerico: {
    width: '15%',
    height: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    fontSize:22
  },




  //-----------------------

  botaoFixoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#010216',
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    height:60,
    borderTopColor: 'white',
    borderTopWidth: 3,
    flexDirection: 'row',
  },

  botaoFixo: {
    height: '100%', 
    width: '50%', 
    backgroundColor: '#010216',
    padding: 10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },

  textoBotao: {
    color: 'white', // Adapte a cor conforme necessário
    fontSize: 20,
    // fontWeight: 'bold',
    letterSpacing: 9
  },




modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo escura para o modal
},
modalContent: {
  backgroundColor: '#fff',
  padding: 20,
  borderRadius: 10,
  width: '80%',
},

paginacao: {
  alignItems: 'center',
  marginTop: 20,
},
});

export default styles;
