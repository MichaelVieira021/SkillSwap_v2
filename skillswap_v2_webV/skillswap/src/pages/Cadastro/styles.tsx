import styled from 'styled-components';

import backgroundGif from '../../assets/img/background.gif';


// export const FontFace = styled.div`
//   @font-face {
//     font-family: 'fontSkillSwap';
//     src: url('../../assets/fonts/DevilCandle.otf');
//   }
// `;

export const BackgroundCadastro = styled.div`
  background-image: url(${backgroundGif});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerFormularioCadastroCompleto = styled.main`
  width: 45%;
  height: 55%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.822);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #010216;
  /* border: 1px solid white; */
  box-shadow: inset 0 0 10px rgba(142, 79, 245, 0.822);
  padding: 9px;

  @media (max-width: 1334px) {
    width: 20rem;
    min-width: 20rem;
    height: 22rem;
  }

  @media (max-height: 640px) {
    height: 22rem;
  }
`;

export const ContainerImagemFormularioCadastro = styled.section`
  width: 60%;
  min-width: 60%;
  height: 100%;

  @media (max-width: 1334px) {
    display: none;
  }
`;

export const ContainerInputs = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1334px) {
    width: 100%;
    height: 65%;
    margin-top: 15%;
  }
`;

export const ImagemFormularioCadastro = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.9;
  border-radius: 10px 0 0 10px;
  object-fit: cover;
`;

export const ContainerFormularioCadastro = styled.form`
  width: 40%;
  height: 100%;
  color: rgb(255, 255, 255);
  opacity: 0.9;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p{
    margin-bottom: 25px;
  }

  @media (max-width: 1334px) {
    width: 100%;
  }
`;

export const BotaoCadastro = styled.button`
  border: none;
  outline: none;
  width: 180px;
  height: 40px;
  border-radius: 6px;
  box-shadow: 3px 3px 6px rgba(37, 1, 122, 0.822);
  margin-bottom: 12px;
  margin-top: 20px;
  font-size: 1rem;

  &:disabled {
    background-color: rgb(122, 122, 122);
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.822);
    color: #fafafa;
    cursor:not-allowed
  }

  &:not(:disabled):hover {
    background-color: rgb(203, 255, 255);
  }
`;

export const TextoCadastro = styled.p`
  margin-bottom: 25px;
`;

export const TituloCadastro = styled.h1`
  font-size: 34px;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 600;
`;

export const ContainerLogin = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  & p {
    margin-top: 10px;
    font-size: 0.9rem;
  }
`;
