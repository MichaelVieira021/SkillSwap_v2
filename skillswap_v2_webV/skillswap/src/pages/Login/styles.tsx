// @font-face {
//     font-family: 'fontSkillSwap';
//     src: url('../../assets/fonts/DevilCandle.otf');
//   }

// #backgroundLogin {
//     background-image: url('../../assets/img/background.gif');
//     background-size: cover;
//     background-repeat: no-repeat;
//     width: 100vw;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// #containerFormularioLoginCompleto{
//     width: 45%;
//     height: 55%;
//     box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.822);
//     border-radius: 10px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     background-color: #010216;
//     border: 1px solid white;
//     box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.822);
//     padding: 9px;
// }

// #containerImagemFormularioLogin{
//     width: 60%;
//     min-width: 60%;
//     height: 100%;
// }

// #containerInputs{
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     margin-top: 0;
// }

// #containerImagemFormularioLogin img{
//     width: 100%;
//     height: 100%;
//     opacity: 0.9;
//     border-radius: 10px 0 0 10px;
//     object-fit: cover;
// }

// #containerFormularioLogin{
//     width: 40%;
//     height: 100%;
//     color: rgb(255, 255, 255);
//     opacity: 0.9;
//     background-size: contain;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// }

// #containerFormularioLogin button{
//     border: none;
//     outline: none;
//     width: 180px;
//     height: 40px;
//     border-radius: 6px;
//     box-shadow: 3px 3px 6px rgba(37, 1, 122, 0.822);
//     margin-bottom: 12px;
//     margin-top: 10px;
//     font-size: 1rem;
// }

// #containerFormularioLogin button:hover{
//     background-color: rgb(203, 255, 255);
// }

// #containerFormularioLogin p{
//     margin-bottom: 15px;
// }

// #tituloLogin{
//     font-size: 34px;
//     font-family: 'fontSkillSwap';
//     font-weight: 600;
// }

// #gravadorDeSenha{
//     display: flex;
//     justify-content: flex-start;
//     margin-right: 6.5rem;
// }

// @media (max-width: 1334px){
//     #containerImagemFormularioLogin{
//         display: none;
//     }

//     #containerFormularioLoginCompleto{
//         width: 20rem;
//         min-width: 20rem;
//         height: 22rem;
//     }

//     #containerFormularioLogin{
//         width: 100%;
//     }

//     #containerInputs{
//         width: 100%;
//         height: 65%;
//         margin-top: 15%;
//     }

//     #gravadorDeSenha{
//         margin-right: 10rem
//     }
// }

// @media (max-height: 640px){
//     #containerFormularioLoginCompleto{
//         height: 22rem;
//     }
// }



import styled from 'styled-components';

import backgroundGif from '../../assets/img/background.gif';

// export const FontFace = styled.div`
//   @font-face {
//     font-family: 'fontSkillSwap';
//     src: url('../../assets/fonts/DevilCandle.otf');
//   }
// `;

export const BackgroundLogin = styled.div`
  background-image: url(${backgroundGif});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerFormularioLoginCompleto = styled.main`
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

    @media (max-height: 640px) {
      height: 22rem;
    }

    @media (max-width: 1334px) {
      width: 20rem;
      min-width: 20rem;
      height: 22rem;
    }
`;

export const ContainerImagemFormularioLogin = styled.section`
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
  margin-top: 0;

  @media (max-width: 1334px) {
      width: 100%;
      height: 65%;
      margin-top: 15%;
    }
`;

export const ImagemFormularioLogin = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.9;
  border-radius: 10px 0 0 10px;
  object-fit: cover;
`;

export const ContainerFormularioLogin = styled.form`
  width: 40%;
  height: 100%;
  color: rgb(255, 255, 255);
  opacity: 0.9;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1334px) {
      width: 100%;
    }

  p{
    margin-bottom: 15px;
  }
`;

export const BotaoLogin = styled.button`
  border: none;
  outline: none;
  width: 180px;
  height: 40px;
  border-radius: 6px;
  box-shadow: 3px 3px 6px rgba(37, 1, 122, 0.822);
  margin-bottom: 12px;
  margin-top: 10px;
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

export const TextoLogin = styled.p`
  margin-bottom: 15px;
`;

export const TituloLogin = styled.h1`
  font-size: 34px;
  font-family: 'fontSkillSwap';
  font-weight: 600;
`;

export const GravadorDeSenha = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 6.5rem;

  @media (max-width: 1334px) {
    margin-right: 10rem;
  }
`;
