// #visualizarSkillUserPorId {
//     display: flex;
//     flex: 1 1 360px;
//     max-width: 580px;
//     max-height: 80px;
//     flex-direction: column;
//     background-color: #0f0f0f;
//     box-shadow: 4px 4px 8px rgb(0, 0, 0);
//     color: white;
//     font-family: Arial, Helvetica, sans-serif;
//     padding: 6px;
//     margin: 10px 20px 10px 0;
//     border-radius: 6px;
// }

// #visualizarSkillUserPorId label {
//     font-size: 0.8rem;
//     margin-top: 3px;
// }

// #visualizarSkillUserPorId img {
//     width: 4.5rem;
//     height: 4.5rem;
//     display: block;
// }

// #boxSkillUserLvl {
//     display: flex;
// }

// @media (max-width: 846px) {
//     #visualizarSkillUserPorId {
//         max-width: 700px;
//         width: auto;
//     }
// }

// @media (max-width: 406px) {
//     #visualizarSkillUserPorId {
//         margin: 10px 4px 10px 0;
//     }
// }

// #containerLevel {
//     display: flex;
//     flex-direction: column;
//     position: absolute;
//     right: 0;
//     bottom: 0;
//     align-items: center;
//     justify-content: center;
// }

// #containerLevel p{
//     font-size: 0.8rem;
//     font-weight: 600;
//     letter-spacing: 4px;
//     margin-bottom: 4px;
// }

// #containerBotoesLevel{
//     display: flex;
//     align-items: center;
//     width: 80px;
// }

// .botao-diminuir,
// .botao-aumentar {
//     width: 20px;
//     font-size: 1rem;
//     cursor: pointer;
//     background-color: #3c175f;
//     border: none;
//     color: white;
// }

// .botao-diminuir:hover,
// .botao-aumentar:hover {
//     background-color: #672c9e;
// }

// #LevelAtualSkillUser{
//     font-size: 1rem;
//     margin: 0 10px;
// }

import styled from 'styled-components';

export const VisualizarSkillUserPorId = styled.div`
    display: flex;
    flex: 1 1 360px;
    max-width: 580px;
    max-height: 80px;
    flex-direction: column;
    background-color: #0f0f0f;
    box-shadow: 4px 4px 8px rgb(0, 0, 0);
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    padding: 6px;
    margin: 10px 20px 10px 0;
    border-radius: 6px;

    label {
        font-size: 0.8rem;
        margin-top: 3px;
    }

    img {
        width: 4.5rem;
        height: 4.5rem;
        display: block;
    }

    @media (max-width: 846px) {
        max-width: 700px;
        width: auto;
    }

    @media (max-width: 406px) {
        margin: 10px 4px 10px 0;
    }
`;

// #boxSkillUserLvl {
//     display: flex;
// }
export const BoxSkillUserLvl = styled.div`
    display: flex;
`

export const ContainerLevel = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;

    p {
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 4px;
        margin-bottom: 4px;
    }
`;

export const ContainerBotoesLevel = styled.div`
    display: flex;
    align-items: center;
    width: 80px;
`;

export const BotaoDiminuir = styled.button`
    width: 20px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #3c175f;
    border: none;
    color: white;

    &:hover {
        background-color: #672c9e;
    }
`;

export const BotaoAumentar = styled.button`
    width: 20px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #3c175f;
    border: none;
    color: white;

    &:hover {
        background-color: #672c9e;
    }
`;

export const LevelAtualSkillUser = styled.span`
    font-size: 1rem;
    margin: 0 10px;
`;

