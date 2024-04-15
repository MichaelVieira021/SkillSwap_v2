import styled from 'styled-components';

export const FiltroContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.h3`

`;

export const Formulario = styled.form`
  width: 100%;
`;

export const Opcoes = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  padding: 7px;
  border: 1px solid #ccc;
  background: #fff;
  color: #333;
`;

export const Botao = styled.button`
  padding: 4px;
  border: none;
  background-color: #9f4deb;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const Select = styled.select`
  padding: 7px;
  border: 1px solid #ccc;
  color: #333;
`;
