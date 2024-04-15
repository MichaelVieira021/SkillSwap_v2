
import { useEffect, useRef, useState } from 'react'
import {
  adicionarSkillUser,
  configurarToken,
  delUserSkill,
  levelDown,
  levelUp,
  obterTodasSkillsUserNaoTem,
  obterTodasSkillsUserOrdem,
} from '../../api/api';
import { Header } from '../../components/Header';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { CardSkill } from '../../components/CardSkill';
import { ButtonAddSkill, ContainerListaDeSkillsUser, ContainerPaginacao, ContainerPrincipal, ModalObterSkill, PaginaHomeListSkillUser, TituloListaDeSkills, TituloModalObterSkill, VisualizarTodasSkills } from './styles';
import { CardError } from '../../components/CardError';
import { CardSuccess } from '../../components/CardSuccess';
import { Filtro } from '../../components/Filtro';
import { NativeSelect, Pagination, useMediaQuery } from '@mui/material';

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

export function SkillsUser() {
  const [data, setData] = useState<Data>(DataInitial);
  const [listSkills, setListSkills] = useState([]);
  const [user] = useState<User>(() => {
    const userDataFromLocalStorage = localStorage.getItem('user');
    return userDataFromLocalStorage ? JSON.parse(userDataFromLocalStorage) : UserInitial;
  });
  const [modalShop, setModalShop] = useState(false)
  const [levelSkillObter, setLevelSkillObter] = useState(1);
  const [skillSelecionada, setSkillSelecionada] = useState<Skill>(SkillInitial)
  const [sizePage, setSizePage] = useState({ initial: 0, final: 9 });
  const [ordenar, setOrdenar] = useState<string>("skill.nome");
  const [filtro, setFiltro] = useState<Filtro>(FiltroInitial);

  const tes = useMediaQuery('(max-width: 843px)');
  const test = useMediaQuery('(min-width: 843px)');
  const test2 = useMediaQuery('(min-width: 1223px)');
  const test23 = useMediaQuery('(max-width: 1223px)');
  const test1600 = useMediaQuery('(min-width: 1600px)');

  useEffect(() => { buscarSkillOrdenada() }, [sizePage])
  useEffect(() => {
    if (!test && tes && !test2) {
      setSizePage({ initial: 0, final: 3 });
    } else if (!tes && test && !test2) {
      setSizePage({ initial: 0, final: 6 });
    } else if (!test2 && test23 && !tes && test) {
      setSizePage({ initial: 0, final: 9 });
    } else if (test1600) {
      setSizePage({ initial: 0, final: 12 }); // Altere os valores conforme necessário
    }
  }, [test, tes, test2, test23, test1600]);


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
      CardError(e.response.data)
    })
  }

  const aumentarLevelSkill = (idSkill: number) => {
    levelUp(user.id, idSkill).then(() => {
      buscarSkillOrdenada()
    }).catch((e) => {
      CardError(e.response.data)
    })
  }

  const baixarLevelSkill = (idSkill: number) => {
    levelDown(user.id, idSkill).then(() => {
      buscarSkillOrdenada()
    }).catch((e) => {
      CardError(e.response.data)
    })
  }

  const deletarSkillUser = (idSkill: number) => {
    delUserSkill(user.id, idSkill).then(() => {
      buscarSkill()
    }).catch((e) => {
      CardError(e.response.data)
    })
  }

  const obterListaSkills = () => {
    obterTodasSkillsUserNaoTem(user.id).then((response) => {
      setListSkills(response.data.content)
      console.log(response.data.content)
      setSkillSelecionada(response.data.content[0])
      console.log(response.data.content[0])
      setModalShop(true)
    }).catch((e) => {
      CardError(e.response.data)
    })
  }

  const handleLevelSkillObter = (event: any) => {
    if (levelSkillObter <= 20) {
      setLevelSkillObter(event.target.value);
    }
  };

  const adquidrirSkill = () => {
    adicionarSkillUser(user.id, skillSelecionada.id, levelSkillObter).then(() => {
      buscarSkill()
      setModalShop(false)
      setLevelSkillObter(1)
      CardSuccess("Skill adquirida com sucesso!!")
    }).catch((e) => {
      CardError(e.response.data)
    })
  }

  return (

    <PaginaHomeListSkillUser>
      <Header />
      <TituloListaDeSkills>HABILIDADES</TituloListaDeSkills>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginRight: "95px", marginLeft: "95px" }}>
        <Filtro filtragem={setFiltro} />
        <div>
          <h3 style={{ color: "white" }}>Ordenar por: </h3>
          <NativeSelect style={{ background: "white", width: "150px", height: "25px" }}
            onChange={(e) => { setOrdenar(e.target.value), buscarSkillOrdenada(0, e.target.value) }}
          >
            <option value={"skill.nome"}>nome</option>
            <option value={"level,desc"}>level</option>
          </NativeSelect>
        </div>
      </div>

      <ContainerPrincipal>
        <ContainerListaDeSkillsUser>
          <VisualizarTodasSkills>
            {data.content.slice(sizePage.initial, sizePage.final).map(item => (
              <CardSkill
                key={item.skill.id}
                idSkillUser={item.skill.id}
                skill={item.skill}
                level={item.level}
                aumentarLevelSkill={() => aumentarLevelSkill(item.skill.id)}
                baixarLevelSkill={() => baixarLevelSkill(item.skill.id)}
                deletarSkillUser={() => deletarSkillUser(item.skill.id)}
              />
            ))}
          </VisualizarTodasSkills>

          <ContainerPaginacao>
            <Pagination
              size='medium'
              className='paginacao'
              color='secondary'
              count={data.totalPages}
              page={data.number + 1}
              onChange={(event, page) => { buscarSkillOrdenada(page), console.log(event) }}
            />
          </ContainerPaginacao>

          <ButtonAddSkill disabled={data.content.length === 0} onClick={obterListaSkills}>ADICIONAR NOVA SKILL</ButtonAddSkill>

          <Modal open={modalShop}>
            <ModalObterSkill>
              <TituloModalObterSkill>Skills</TituloModalObterSkill>
              <div style={{ display: 'flex', gap: 4 }}>
                <Autocomplete
                  disablePortal
                  disableClearable
                  id="combo-box-demo"
                  options={listSkills || []}
                  getOptionLabel={(option) => option.nome}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Lista de Skills" />}
                  value={skillSelecionada}
                  onChange={(event, value) => setSkillSelecionada(value)}
                />

                <TextField
                  id="outlined-number"
                  label="Level"
                  type="number"
                  value={levelSkillObter}
                  onChange={handleLevelSkillObter}
                  sx={{ width: 70 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>

              <CardSkill skill={skillSelecionada} />

              <div style={{ justifyContent: 'space-between', width: "100%" }}>
                <Button variant="contained" onClick={adquidrirSkill} size="large" style={{ backgroundColor: 'green', width: '49%', marginRight: 5 }}>Salvar</Button>
                <Button variant="contained" size="large" color="error" style={{ width: '49%' }} onClick={() => { setModalShop(false), setLevelSkillObter(1) }}>Cancelar</Button>
              </div>

            </ModalObterSkill>
          </Modal>
        </ContainerListaDeSkillsUser>
      </ContainerPrincipal>
    </PaginaHomeListSkillUser>
  )
}
