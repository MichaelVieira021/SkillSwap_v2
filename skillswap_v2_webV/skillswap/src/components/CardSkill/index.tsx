import { BotaoAumentar, BotaoDiminuir, BoxSkillUserLvl, ContainerBotoesLevel, ContainerLevel, LevelAtualSkillUser, VisualizarSkillUserPorId } from "./styles";

interface Skill {
  id: number;
  nome: string;
  tecAmp: number;
  atkAdicional: number;
  duracao?: number;
  resfriamento: number;
  foto: string;
};

interface CardProps {
  skill: Skill,
  baixarLevelSkill?: (id: number) => void | undefined,
  deletarSkillUser?: (id: number) => void,
  aumentarLevelSkill?: (id: number) => void,
  idSkillUser?: number,
  level?: number,
}


export function CardSkill({ skill, baixarLevelSkill, deletarSkillUser, aumentarLevelSkill, idSkillUser, level }: CardProps) {
  return (
    <VisualizarSkillUserPorId 
      key={idSkillUser || undefined} style={idSkillUser ? undefined :
      { width: "363px", margin: 'auto 0', marginTop: "15px", marginBottom: "35px" }}
    >
      <BoxSkillUserLvl>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={skill.foto} alt="Descrição do SVG" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: "6px", width: "100%", position: 'relative' }}>
          <label style={{ fontWeight: "600", fontSize: "1.05rem" }}>
            {skill.nome}
          </label>

          <label>
            AMP: {skill.tecAmp}%
          </label>

          <label>
            ATK: {skill.atkAdicional}
          </label>

          <label>
            DURAÇÃO: {skill.duracao?.toFixed(2)}
          </label>

          {idSkillUser && (
            <p style={{ cursor: 'pointer', position: 'absolute', right: "0rem", top: "0rem", color: 'tomato' }}
              onClick = {() => deletarSkillUser(skill.id)}>
                {skill.id !== null ? 'X' : null}
            </p>
            )}

          {idSkillUser &&(
            <ContainerLevel>
              <p>LEVEL</p>
              <ContainerBotoesLevel>
              
                <BotaoDiminuir onClick={() => baixarLevelSkill(idSkillUser)}>
                  -
                </BotaoDiminuir>
                <LevelAtualSkillUser>{level} </LevelAtualSkillUser>
                <BotaoAumentar onClick={() => aumentarLevelSkill(idSkillUser)}>
                  +
                </BotaoAumentar>
              </ContainerBotoesLevel>
            </ContainerLevel>
          )}

          {!idSkillUser && (
            <ContainerLevel style={{ top: 4 }}>
              <p>LEVEL</p>
              <LevelAtualSkillUser>1</LevelAtualSkillUser>
            </ContainerLevel>
          )}
        </div>
      </BoxSkillUserLvl>
    </VisualizarSkillUserPorId >
  )
} 