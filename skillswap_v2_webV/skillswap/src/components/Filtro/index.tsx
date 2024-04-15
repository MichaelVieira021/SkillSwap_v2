// import React from 'react';
// import SearchIcon from '@mui/icons-material/Search';
// import { useForm } from 'react-hook-form';


// interface filtroProps {
//     filtragem: React.Dispatch<React.SetStateAction<any>>;
// }


// export const Filtro = ({filtragem}:filtroProps) => {
//     const {register, handleSubmit} = useForm();

//   const handleFiltroChange = (data:any) => {
//       console.log(data)
//       filtragem(data)
//   };


//   return (
// <div style={{width: "350px", display: 'flex'}}>
//     <form style={{width: "50%"}} onSubmit={handleSubmit(handleFiltroChange)}>
//     <h3>Filtrar level</h3>
//     <div style={{display: 'flex'}}>

//       <select  

//        {...register("filtro")}

//       >
//         <option value="<">Menor</option>
//         <option value=">">Maior</option>
//         <option value="=">Igual</option>
//       </select>
//       <input
//       style={{width: "90%"}}
//       type="number"
//       min={1}
//       max={20}
//       placeholder="Pesquisar..."

//         {...register("valor")}

//         />

//    <button  
// type='submit'
//    style={{ padding: '3px', border: 'none', cursor: 'pointer' }}>
//         <SearchIcon style={{cursor: 'pointer'}} />
        
//  </button>
//         </div>
//         </form>
//     </div>
//   );
// };
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Botao, FiltroContainer, Formulario, Input, Opcoes, Select, Titulo } from './styles';
// import { Input, Select } from '@mui/material';


interface FiltroProps {
    filtragem: React.Dispatch<React.SetStateAction<any>>;
}

export const Filtro: React.FC<FiltroProps> = ({ filtragem }) => {
  const { register, handleSubmit } = useForm();

  const handleFiltroChange = (data: any) => {
      console.log(data);
      filtragem(data);
  };

  return (
      <FiltroContainer>
          <Formulario onSubmit={handleSubmit(handleFiltroChange)}>
              <Titulo>Filtrar level</Titulo>
              <Opcoes>
                  <Select 
                  {...register("filtro")}>
                      <option value="<">Menor</option>
                      <option value=">">Maior</option>
                      <option value="=">Igual</option>
                  </Select>
                  <Input
                      type="number"
                      min={1}
                      max={20}
                      placeholder="Pesquisar..."
                      {...register("valor")}
                  />
                  <Botao type='submit'>
                      <SearchIcon />
                  </Botao>
              </Opcoes>
          </Formulario>
      </FiltroContainer>
  );
};