/* @font-face {
  font-family: 'fontSkillSwap';
  src: url('../../assets/fonts/DevilCandle.otf');
}

#paginaHomeListSkillUser{
  background-color: #010216;
  display: flex;
  height: 100vh;
  flex-direction: column;
}

#tituloListaDeSkills{
  font-size: 38px;
  color: white;
  text-shadow: 2px 2px 2px #000000;
  margin-top: 8rem;
  font-family: fontSkillSwap;
  align-items: center;
  text-align: center;
  letter-spacing: 8px
}

#containerPrincipal{
  display: flex;
  justify-content: space-between;
  background-image: url('../../assets/img/backgroundList.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  width: 100%;
  margin-top: -1rem;
  height: 500px;
}

#containerListaDeSkillsUser{
  width: 100%;
  height: 410px;
  min-height: 410px;
  display: flex;
  margin-left: 2.7rem;
  margin-right: 2.7rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

#buttonAddSkill{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(27, 20, 39);
  border: 1px solid #6d5223;
  text-shadow: 2px 2px 2px #000000;
  color: white;
  width: 100%;
  font-size: 1.6rem;
  font-family: fontSkillSwap;
}

#buttonAddSkill:hover{
  background-color: rgb(42, 32, 61);
}

#visualizarTodasSkills{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  margin-top: 10px;
  width: 100%;
  max-height: 350px;
  overflow-y: scroll;
}

#visualizarTodasSkills::-webkit-scrollbar {
  width: 10px;
}

#visualizarTodasSkills::-webkit-scrollbar-thumb {
  background-color: #553d1a;
}

@media (max-width: 1323px){
  #containerListaDeSkillsUser{
    margin-right: 2.5rem;
  }
}

@media (min-width: 1575px){
  #containerListaDeSkillsUser{
    margin-left: 3.3rem;
    margin-right: 3.3rem;
  }
}

@media (min-width: 1420px){
  #containerListaDeSkillsUser{
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
}

@media (max-width: 466px){
  #containerListaDeSkillsUser{
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}

#ModalObterSkill{
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 24px black;
  padding: 2rem;
  border-radius: 20px;
  align-items: center;
}

#tituloModalObterSkill{
  font-family: fontSkillSwap;
  font-size: 4rem;
  text-align: center;
  margin-bottom: 40px;
} */

import styled from 'styled-components';

import brackgroundImg from '../../assets/img/backgroundList.png';

export const GlobalStyle = styled.div`
  @font-face {
    font-family: 'fontSkillSwap';
    src: url('../../assets/fonts/DevilCandle.otf');
  }
`;

export const PaginaHomeListSkillUser = styled.div`
  background-color: #010216;
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const TituloListaDeSkills = styled.h1`
  font-size: 38px;
  color: white;
  text-shadow: 2px 2px 2px #000000;
  margin-top: 8rem;
  font-family: fontSkillSwap;
  align-items: center;
  text-align: center;
  letter-spacing: 8px;
`;

export const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-image: url(${brackgroundImg}); */
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  /* align-items: center; */
  width: 100%;
  /* margin-top: -1rem; */
  height: 500px;
`;

export const ContainerListaDeSkillsUser = styled.div`
  width: 100%;
  height: 10px;
  min-height: 310px;
  display: flex;
  margin-left: 2.7rem;
  margin-right: 2.7rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 466px){
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  @media (max-width: 1323px){
    margin-right: 2.5rem;
  }

@media (min-width: 1575px){
    margin-left: 3.3rem;
    margin-right: 3.3rem;
  }

@media (min-width: 1420px){
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
`;

export const ButtonAddSkill = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(27, 20, 39);
  border: 1px solid #6d5223;
  text-shadow: 2px 2px 2px #000000;
  color: white;
  width: 100%;
  font-size: 1.6rem;
  font-family: fontSkillSwap;

  &:hover {
    background-color: rgb(42, 32, 61);
  }
`;

export const VisualizarTodasSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  /* margin-top: 10px; */
  width: 100%;
  max-height: 350px;
  overflow: 'hidden'
  /* overflow-y: scroll; */

  /* &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #553d1a;
  } */
`;

export const ModalObterSkill = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 24px black;
  padding: 2rem;
  border-radius: 20px;
  align-items: center;
`;

export const TituloModalObterSkill = styled.h2`
  font-family: fontSkillSwap;
  font-size: 4rem;
  text-align: center;
  margin-bottom: 40px;
`;

export const ContainerPaginacao = styled.div`
  width: 70%;
  align-items: center;
  display: flex;
  flex-direction: column;

  .paginacao{
    /* font-size: 0px; */

    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    background: #fdfdfd;
    /* width: 200px; */
  }
`
