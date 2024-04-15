import React, { createContext, useEffect, useState } from "react";
import { cadastrarNovoUsuario, configurarToken, verificarUsuario } from "../../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { Snackbar } from "react-native-paper";
import { Text } from "react-native";

interface ContextProps {
    children: React.ReactNode
}

interface ModalAlerta {
    mensagem: string,
    visible: boolean,
    cor: string
}

export const LoginContext = createContext<any>({})

export function LoginContextProvider({ children }: ContextProps) {
    const [infoAlert, setInfoAlert] = useState<ModalAlerta>({ mensagem: '', visible: false, cor: 'black' });
    const navigate = useNavigation<any>();

    function verificarLogin(login: string, senha: string, gravarSenha: boolean) {
        verificarUsuario(login, senha).then((response) => {
            configurarToken(response.data.token)
            AsyncStorage.setItem('token', response.data.token);
            AsyncStorage.setItem('user', JSON.stringify(response.data.usuario));

            if (gravarSenha) {
                AsyncStorage.setItem('gravarSenha', JSON.stringify({ login: login, senha: senha }));
            } else if (!gravarSenha) {
                AsyncStorage.removeItem('gravarSenha')
            }
            setInfoAlert({ mensagem: 'Login efetuado com sucesso!', visible: true, cor: 'green' })
            navigate.navigate('Home')
        }).catch((error) => {
            console.log("esse aqui: "+error.response.data)
            setInfoAlert({ mensagem: error.response.data.userMessage, visible: true, cor: 'tomato' })
        })
    }

    function cadastrarUsuario(login: string, senha: string, confirmarSenha: string) {
        if (senha === confirmarSenha) {
            cadastrarNovoUsuario(login, senha).then(() => {
                setInfoAlert({ mensagem: 'Cadastrado com sucesso!', visible: true, cor: 'green' })
                navigate.navigate('Login')
            }).catch((error) => {
                setInfoAlert({ mensagem: error.response.data.userMessage, visible: true, cor: 'tomato' })
            })
        } else {
            setInfoAlert({ mensagem: "senhas não coincidem!", visible: true, cor: 'tomato' })
        }
    }

    function deslogar() {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate.navigate('Login')
    }

    return (
        <LoginContext.Provider value={{
            verificarLogin,
            cadastrarUsuario,
            deslogar
        }}>{children}

            <Snackbar
                style={{ backgroundColor: infoAlert.cor, bottom: 70 }}
                elevation={5}
                visible={infoAlert.visible}
                duration={1000}
                onDismiss={() => setInfoAlert({ mensagem: '', visible: false, cor: 'black' })}>
                <Text style={{ fontSize: 24, color: 'white' }}>{infoAlert.mensagem}</Text>
            </Snackbar>
        </LoginContext.Provider>
    )
}