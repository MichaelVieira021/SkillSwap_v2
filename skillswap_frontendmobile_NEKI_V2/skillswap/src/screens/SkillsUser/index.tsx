
import React, { useContext, useEffect, useState } from 'react';
import {
  adicionarSkillUser,
  configurarToken,
  delUserSkill,
  levelDown,
  levelUp,
  obterSkillPorId,
  obterTodasSkillsUserNaoTem,
  obterTodasSkillsUserNot,
  obterTodasSkillsUserOrdem,
  skillsUser
} from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { CardSkill } from '../../components/CardSkill'
import DropDownPicker from 'react-native-dropdown-picker';
import { Button, Modal, Snackbar } from 'react-native-paper';
import { LoginContext } from '../../contexts/LoginContext';
import { Filtro } from '../../components/Filtro';
import DataTablePagination from 'react-native-paper/lib/typescript/components/DataTable/DataTablePagination';


interface User {
  id: number;
  login: string;
  senha: string;
}

interface Skill {
  id: number;
  nome: string;
  tecAmp: number;
  atkAdicional: number;
  duracao: number;
  resfriamento: number;
  foto: string;
}

interface userSkill {
  level: number,
  skill: Skill

}

interface Data {
  content: userSkill[],
  number: number,
  size: number,
  totalElements: number,
  totalPages: number,
}

const UserInitial: User = {
  id: 0,
  login: "",
  senha: "",
}

const SkillInitial: Skill = {
  id: 0,
  nome: "",
  tecAmp: 0,
  atkAdicional: 0,
  duracao: 0,
  resfriamento: 0,
  foto: "",
}

const DataInitial: Data = {
  content: [],
  number: 0,
  size: 0,
  totalElements: 0,
  totalPages: 0,
}

const FiltroInitial: Filtro = {
  filtro: undefined,
  valor: undefined
}

interface Filtro {
  filtro: string | undefined,
  valor: number | undefined
}

interface ModalAlerta {
  mensagem: string,
  visible: boolean,
  cor: string
}

export function SkillsUser() {
  const [data, setData] = useState<Data>(DataInitial);
  const [sizePage, setSizePage] = useState({ initial: 0, final: 6 });
  const [ordenar, setOrdenar] = useState<string>("skill.nome");
  const [filtro, setFiltro] = useState<Filtro>(FiltroInitial);
  const { deslogar } = useContext(LoginContext)
  const [infoAlert, setInfoAlert] = useState<ModalAlerta>({ mensagem: '', visible: false, cor: 'black' });
  // const [data, setData] = useState([]);
  const [listSkills, setListSkills] = useState([]);
  // const [user, setUser] = useState<User>({ id: 0, login: '', senha: '' });
  const [user] = useState<User>(() => {
    const userDataFromLocalStorage = localStorage.getItem('user');
    return userDataFromLocalStorage ? JSON.parse(userDataFromLocalStorage) : UserInitial;
  });
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [combolVisible, setComboVisible] = useState<boolean>(false)
  const [levelSkillObter, setLevelSkillObter] = useState<number>(1);
  const [skillSelecionada, setSkillSelecionada] = useState<Skill>(SkillInitial)

  useEffect(() => {
    setOrdenar("skill.nome")
    buscarSkillOrdenada()
  }, [filtro])
  useEffect(() => { }, [skillSelecionada, data])
  useEffect(() => { buscarSkill() }, [])

  useEffect(() => {
    if (levelSkillObter > 20) {
      setLevelSkillObter(20)
    }
    if (levelSkillObter < 1) {
      setLevelSkillObter(1)
    }
  }, [levelSkillObter])

  useEffect(() => { buscarSkill() }, [])
  useEffect(() => { }, [skillSelecionada])

  useEffect(() => {
    if (levelSkillObter > 20) {
      setLevelSkillObter(20)
    }
  }, [levelSkillObter])

  // const carregarUser = async () => {
  //   try {

  //     if (await AsyncStorage.getItem('user')) {
  //       const usuarioEncontrado = await AsyncStorage.getItem('user');
  //       setUser(JSON.parse(usuarioEncontrado))
  //       return JSON.parse(usuarioEncontrado).id
  //     }
  //   } catch (error) {
  //   }
  // }

  // const buscarSkill = async () => {
  //   // carregarUser()
  //   skillsUser(await carregarUser()).then((response) => {
  //     setData(response.data)
  //   }).catch((e) => {
  //     setInfoAlert({mensagem: e.response.data.mensagem, visible: true, cor: 'tomato'})
  //   })
  // }

  const buscarSkill = () => {
    buscarSkillOrdenada();
  }

  const buscarSkillOrdenada = (page?: number, orden?: string) => {
    const token = localStorage.getItem('token');
    if (token) { configurarToken(token) }
    page ? page -= 1 : page;
    orden != undefined && orden != ordenar ? orden : orden = ordenar;
    var novoFiltro: Filtro = {
      filtro: filtro.filtro != undefined ? filtro.filtro : undefined,
      valor: filtro.valor != undefined ? filtro.valor : undefined,
    }
    obterTodasSkillsUserOrdem(user.id, page, orden, sizePage.final, novoFiltro.valor, novoFiltro.filtro).then((response) => {
      console.log(response)
      setData(response.data)
    }).catch((e) => {
      setInfoAlert({ mensagem: e.response.data.userMessage, visible: true, cor: 'tomato' })
      // CardError(e.response.data)
    })
  }

  const testeDeSkill = (itemTeste: any) => {
    var teste = itemTeste.value
    obterSkillPorId(teste).then((response) => {
      console.log("askill aqui: "+ response.data)
      setSkillSelecionada(response.data)
    })
  }


  const aumentarLevelSkill = (idSkill: number) => {
    levelUp(user.id, idSkill).then(() => {
      buscarSkillOrdenada()
    }).catch((e) => {
      setInfoAlert({ mensagem: e.response.data.userMessage, visible: true, cor: 'tomato' })
    })
  }

  const baixarLevelSkill = (idSkill: number) => {
    levelDown(user.id, idSkill).then(() => {
      buscarSkillOrdenada()
    }).catch((e) => {
      setInfoAlert({ mensagem: e.response.data.userMessage, visible: true, cor: 'tomato' })
    })
  }

  const deletarSkillUser = (idSkill: number) => {
    delUserSkill(user.id, idSkill).then(() => {
      buscarSkill()
    }).catch((e) => {
      setInfoAlert({ mensagem: e.response.data.userMessage, visible: true, cor: 'tomato' })
    })
  }

  const obterListaSkills = () => {
    obterTodasSkillsUserNaoTem(user.id).then((response) => {
      // var teste = console.log(JSON.stringify(response.data.content))
      setModalVisible(true)
      console.log("askilléessa:4444"+response.data)
      setListSkills(response.data.content)
      setSkillSelecionada(response.data.content[0])
      console.log("askilléessa:"+response.data.content[0])
    }).catch((e) => {
      setInfoAlert({ mensagem: e.response.data.userMessage, visible: true, cor: 'tomato' })
    })
  }

  const handleLevelSkillObter = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');

    if (levelSkillObter <= 20) {
      setLevelSkillObter(numericText);
    }
  };

  const adquidrirSkill = () => {
    adicionarSkillUser(user.id, skillSelecionada.id, levelSkillObter < 1 ? 1 : levelSkillObter).then(() => {
      buscarSkill()
      setModalVisible(false)
      setLevelSkillObter(1)
      setInfoAlert({ mensagem: 'Skill adquirida com sucesso!', visible: true, cor: 'green' })
    }).catch((e) => {
      setInfoAlert({ mensagem: e.response.data.userMessage, visible: true, cor: 'tomato' })
    })
  }

  const Card = ({ skillSelect }: any) => (
    console.log(skillSelect),
    <CardSkill skill={skillSelect.skill}
      idSkillUser={skillSelect.id}
      deletarSkillUser={deletarSkillUser}
      aumentarLevelSkill={aumentarLevelSkill}
      baixarLevelSkill={baixarLevelSkill}
      level={skillSelect.level} />
  )

  const options = [];
  for (let i = 1; i <= data.totalPages; i++) {
    options.push(<option key={i} value={i}>{i}</option>);
  }

  const selectPage = (yt: string) => {
    buscarSkillOrdenada(parseInt(yt))
  }

  return (

    <View style={styles.paginaHomeListSkillUser}>

      <View style={{
        alignItems: 'center', paddingBottom: 25, borderBottomWidth: 3,
        borderBottomColor: 'white', backgroundColor: '#010216',
      }}>
        <Text style={[styles.tituloLogin, { fontFamily: 'fontSkillSwap' }]}>SkillSwap</Text>
        <Text style={[styles.tituloLogin, { fontSize: 28, letterSpacing: 9, marginTop: 0 }]}>HABILIDADES</Text>
        <View style={{ height: 120 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Filtro filtragem={setFiltro} />
            <div>

              <p style={{ color: "white", marginBottom: 0 }}>Ordenar por: </p>
              <select style={{ background: "white", width: "150px", height: "25px" }}
                onChange={(e) => { setOrdenar(e.target.value), buscarSkillOrdenada(0, e.target.value) }}
              >
                <option value={"skill.nome"}>nome</option>
                <option value={"level,desc"}>level</option>
              </select>
            </div>

          </div>

        </View>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <Text style={{color: "#ffff", fontSize: "2rem"}}>Página: </Text>
          <select style={{ background: "white", width: "50px", height: "35px" }}
            onChange={(e) => selectPage(e.target.value)}
            value={data.number+1}
          >
            {options}
          </select>
          <div style={{display: 'flex', flexDirection: 'column'}}>

          <Text style={{color: "white"}}>Página: {data.number+1} de {data.totalPages}</Text>
          <Text style={{color: "white"}}>Total de skill: {data.totalElements}</Text>
          </div>
        </div>
      </View>

      <FlatList
        style={{ height: 100, marginBottom: 65 }}
        data={data.content}
        renderItem={({ item }) => <Card skillSelect={item} />}
        showsVerticalScrollIndicator={false}
      />

      <View
        style={styles.botaoFixoContainer}

      >
        <TouchableOpacity style={styles.botaoFixo} onPress={() => obterListaSkills()}>
          <Text style={[styles.textoBotao, { fontFamily: 'fontSkillSwap' }]}>New Skill</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botaoFixo, { backgroundColor: 'tomato' }]} onPress={() => deslogar()}>
          <Text style={[styles.textoBotao, { fontFamily: 'fontSkillSwap' }]}>Sair</Text>
        </TouchableOpacity>

      </View>

      <Modal visible={modalVisible} >
        <View style={styles.ModalObterSkill}>
          <Text style={styles.tituloModalObterSkill}>Skills</Text>

          <View style={{ alignItems: 'center', width: '95%', justifyContent: 'center' }}>
            <DropDownPicker
              textStyle={{
                fontSize: 20
              }}
              style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}
              open={combolVisible}
              value={skillSelecionada.id}
              items={listSkills.map(skill => ({ label: skill.nome, value: skill.id }))}
              setOpen={() => setComboVisible(!combolVisible)}
              setValue={(value) => { }}
              onSelectItem={(value) =>
                testeDeSkill(value)
              }
              setItems={listSkills.map(skill => ({ label: skill.nome, value: skill.id }))}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
              <Text style={[{ fontSize: 22, letterSpacing: 9, marginTop: 0, color: 'black' }]} >LEVEL: </Text>
              <TextInput
                style={styles.inputNumerico}
                keyboardType="numeric"
                value={String(levelSkillObter)}
                onChangeText={(text) => handleLevelSkillObter(text)}
              />
            </View>

            <View style={{ width: '105%' }}>
              <CardSkill skill={skillSelecionada} />
            </View>
          </View>

          <View style={{ width: "95%", marginTop: 10, marginBottom: 10 }}>
            <Button
              mode="contained"
              onPress={adquidrirSkill}
              style={{ margin: 5 }}
              buttonColor='green'
              labelStyle={{ fontSize: 22 }}
            >Confirmar</Button>
            <Button
              mode="contained"
              onPress={() => setModalVisible(false)}
              style={{ margin: 5 }}
              buttonColor='tomato'
              labelStyle={{ fontSize: 22 }}
            >Cancelar</Button>
          </View>

        </View>
      </Modal>

      <Snackbar
        style={{ backgroundColor: infoAlert.cor, bottom: 70 }}
        elevation={5}
        visible={infoAlert.visible}
        duration={1000}
        onDismiss={() => setInfoAlert({ mensagem: '', visible: false, cor: 'black' })}>
        <Text style={{ fontSize: 24, color: 'white' }}>{infoAlert.mensagem}</Text>
      </Snackbar>

    </View>
  )
}
