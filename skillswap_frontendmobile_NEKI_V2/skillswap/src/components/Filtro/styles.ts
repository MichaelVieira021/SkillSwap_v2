// import styled from 'styled-components';

// export const FiltroContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const Titulo = styled.h3`
// `;

// export const Formulario = styled.form`
//   width: 100%;
// `;

// export const Opcoes = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const Input = styled.input`
//   flex: 1;
//   padding: 7px;
//   border: 1px solid #ccc;
//   background: #fff;
//   color: #333;
// `;

// export const Botao = styled.button`
//   padding: 4px;
//   border: none;
//   background-color: #9f4deb;
//   color: #fff;
//   cursor: pointer;
//   transition: background-color 0.3s;
  
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// export const Select = styled.select`
//   padding: 7px;
//   border: 1px solid #ccc;
//   color: #333;
// `;

import { StyleSheet } from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // flexDirection: 'column',
    // width: 10,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20
  },
  formulario: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
  },
  opcoes: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 7,
    // borderWidth: 1,
    // borderColor: '#ccc',
    backgroundColor: '#fff',
    color: '#333',
    height: 17
  },
  botao: {
    padding: 4,
    backgroundColor: '#9f4deb',
    color: '#fff',
  },
  select: {
    padding: 7,
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#333',
  },
});

export default styles;
