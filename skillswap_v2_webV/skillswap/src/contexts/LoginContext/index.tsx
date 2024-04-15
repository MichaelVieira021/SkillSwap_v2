import React, { useEffect } from 'react';
import { createContext } from 'react';
import { cadastrarNovoUsuario, configurarToken, verificarToken, verificarUsuario } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { CardError } from '../../components/CardError';
import { CardSuccess } from '../../components/CardSuccess';
import { UseFormReset } from 'react-hook-form';

interface ContextProps {
    children: React.ReactNode
}

interface LoginContextType {
    cadastrarUsuario(login:string, senha:string): void;
    verificarLogin(login: string, senha: string, gravarSenha: boolean): void;
    checkToken(): void;
}

export const LoginContext = createContext({} as LoginContextType)

export const LoginProvider = ({children}:ContextProps) => {
    const navi = useNavigate()

    useEffect(() => {checkToken()}, []);

    const checkToken = () => {
        
        if(localStorage.getItem('token') && localStorage.getItem('user')){
            const storedToken = localStorage.getItem('token');
            if(storedToken != null)
            verificarToken(storedToken).then((response)=>{
                if(response.data === "Token válido"){
                    configurarToken(storedToken);
                }else{
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                }
            }).catch((error)=>{
                CardError(error.response.data)
            })

        }else{
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    };
    
    function verificarLogin(login: string, senha: string, gravarSenha: boolean) {
        verificarUsuario(login, senha).then((response) => {
            configurarToken(response.data.token)

            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data.usuario));

            if(gravarSenha){
                localStorage.setItem('gravarSenha', JSON.stringify({login: login, senha: senha}));
            }else if (!gravarSenha){
                localStorage.removeItem('gravarSenha')
            }
            CardSuccess("Login efetuado com sucesso!");
            navi('/home')
        }).catch((error) => {
            console.log(error)
            CardError(error.response.data);
        })
    }


    function cadastrarUsuario(login:string, senha:string){ 
        cadastrarNovoUsuario(login, senha).then(()=>{
            CardSuccess("Cadastrado com sucesso!");
            navi('/login')
        }).catch((error)=>{
            CardError(error.response.data)
        })
    }

    return (
        <LoginContext.Provider value={{
            verificarLogin,
            cadastrarUsuario,
            checkToken
        }}>{children} 
        </LoginContext.Provider>
    )
}