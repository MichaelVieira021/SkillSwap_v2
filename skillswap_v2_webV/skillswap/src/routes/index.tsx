// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';
import { SkillsUser } from '../pages/ListaSkillsUser';
import { PrivateRoute } from './privateRoute';
import { PublicRoute } from './publicRoute';
import { PageNotFound } from '../pages/NotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><SkillsUser /></PrivateRoute>}/> 
      <Route path="/Login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/Cadastro" element={<PublicRoute><Cadastro /></PublicRoute>}/>
            <Route path="/home" element={<PrivateRoute><SkillsUser /></PrivateRoute>}/> 
            <Route path='*' element={<PageNotFound />}/>
    </Routes>
  )
};

export default AppRouter;
