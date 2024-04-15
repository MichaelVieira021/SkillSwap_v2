import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  visualizarSkillUserPorId: {
    flexDirection: 'column',
    backgroundColor: '#0f0f0f',
    justifyContent: 'space-between',
    // boxShadow: '4px 4px 8px rgb(0, 0, 0)',
    color: '#f7f7f7',
    fontFamily: 'Arial, Helvetica, sans-serif',
    padding: 8,
    marginTop: 20,
    marginBottom: 0,
    borderRadius: 6,
    marginLeft: '3%',
    marginRight: '3%',
    flexGrow: 1,
    // flexShrink: 1
    // position: 'relative',
  },

  boxCardUnique: {
    // flexShrink: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    marginLeft: 6,
    // width: Dimensions.get('window').width,
    position: 'relative',
  },

  visualizarSkillUserPorIdTextos: {
    fontSize: 17,
    marginTop: 1,
    color: '#f7f7f7',
  },

  visualizarSkillUserPorIdImg: {
    width: 85,
    height: 85,
    // display: 'block',
  },

  boxSkillUserLvl: {
    flex: 1,
    flexDirection: 'row'
  },












//   containerLevel: {
//     flexDirection: 'column',
//     position: 'absolute',
//     right: '4%',
//     bottom: '3%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   containerLevelText: {
//     fontSize: 24,
//     color: 'white',
//     fontWeight: 'bold',
//     letterSpacing: 4,
//   },
//   containerBotoesLevel: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 110,
//     backgroundColor: 'black'
//   },
//   botaoDiminuirAumentar: {
//     width: 48,
//     height: 48,
//     fontSize: 16,

//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#3c175f',
//     color: 'white',
//   },
//   LevelAtualSkillUser: {
//     fontSize: 1,
//   },

containerLevel: {
    // flexDirection: 'row',
    // position: 'absolute',
    // right: '4%',
    // bottom: '3%',
    // alignItems: 'sp',
    // justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    // height: 40,
    marginTop: 7,
    paddingBottom:10,
    // justifyContent: 'center',
    // justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'black',
    // flexGrow: 1,
  },
  containerLevelText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 4,
  },
  containerBotoesLevel: {
    // flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'space-between',
    width: '100%',
    // flexGrow: 1,
    // flexShrink: 1,
    // overflow: 'hidden' ,
    // backgroundColor: 'black'
  },
  botaoDiminuirAumentar: {
    width: "40%",
    // flex:2,
    // width: 150,
    // maxWidth: '30%',
    // overflow: 'hidden',
    // height: 48,
    // flexShrink: 1,
    // fontSize: 16,
    // marginRight: 15,
    // flexGrow: 1,
    // textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3c175f',
    // color: 'white',
    marginLeft:'2%',
    marginRight:'2%',
    // margin: 10
  },
  LevelAtualSkillUser: {
    // fontSize: 1,
  },

});

export default styles;
