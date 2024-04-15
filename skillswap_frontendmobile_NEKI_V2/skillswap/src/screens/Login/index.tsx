import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { styles } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import background from '../../assets/img/background.gif'
import { InputLogin } from '../../components/InputLogin'
import { InputSenha } from '../../components/InputSenha'
import { Checkbox } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { LoginContext } from '../../contexts/LoginContext'
import { useNavigation } from '@react-navigation/native'
import { Form, useForm, Controller } from 'react-hook-form'

interface dadosUsuario {
    login: string
    senha: string
}

export const Login = () => {
    const [fontsLoaded] = useFonts({
        'fontSkillSwap': require("../../assets/fonts/DevilCandle.otf"),
    });
    const { control, handleSubmit, watch, setValue } = useForm<dadosUsuario>();

    const { verificarLogin } = useContext(LoginContext);
    const [gravarSenha, setGravarSenha] = useState(false);
    const navigate = useNavigation<any>();

    useEffect(() => {
        const buscarDadosSalvos = async () => {
            if (AsyncStorage.getItem('gravarSenha')) {
                const salvos = JSON.parse(await AsyncStorage.getItem('gravarSenha'));
                Object.entries(salvos).forEach(([key, value]) => {
                    if (key === "login" || key === "senha") {
                        setValue(key, value as string);
                    }
                });
                setGravarSenha(true)
            }
        }
        buscarDadosSalvos()
    }, [])

    useEffect(() => { }, [verificarLogin])
    useEffect(() => { }, [gravarSenha])

    const gravarLimparSenhaStorage = () => {
        setGravarSenha(!gravarSenha)

        if (gravarSenha) {
            AsyncStorage.removeItem('gravarSenha')
        }
    }

    const teste = (data: dadosUsuario) => {
        verificarLogin(data.login, data.senha, gravarSenha)
    }

    const habilitarCampoLogin = watch("login");
    const habilitarCampoSenha = watch("senha");


    const submitDesabilitado = (
        !habilitarCampoLogin ||
        !habilitarCampoSenha
    )

    return (

        <ImageBackground source={background} style={styles.backgroundLogin}>
            <View style={styles.containerFormularioLoginCompleto}>
                <View style={styles.containerFormularioLogin}>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.tituloLogin, { fontFamily: 'fontSkillSwap' }]}>SkillSwap</Text>
                        <Text style={[styles.tituloLogin, { fontSize: 28, letterSpacing: 16, marginTop: 0 }]}>LOGIN</Text>
                    </View>
                    <View style={styles.containerInputs}>
                        <Controller
                            control={control}
                            name='login'
                            rules={{ required: "login é obrigatorio" }}
                            render={({ field: { onChange, value } }) => (
                                <InputLogin
                                    placeholder="Login"
                                    id="login"
                                    nome="login"
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name='senha'
                            rules={{ required: "senha é obrigatoria" }}
                            render={({ field: { onChange, value } }) => (
                                <InputSenha
                                    placeholder="senha"
                                    id="senha"
                                    nome="senha"
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                        />

                        <View style={styles.gravadorDeSenha}>
                            <Checkbox.Item
                                status={gravarSenha ? "checked" : "unchecked"}
                                label="Gravar senha"
                                labelStyle={{ color: 'white', fontSize: 24 }}
                                position='leading'
                                uncheckedColor='white'
                                color='#15b6df'
                                onPress={() => gravarLimparSenhaStorage()}
                            />
                        </View>
                    </View>

                    <View style={styles.containerLoginButtons}>
                        <TouchableOpacity style={styles.containerInputsButton}
                            disabled={submitDesabilitado}
                            onPress={handleSubmit(teste)}>
                            <Text style={styles.botaoLoginText}>ENTRAR</Text>
                        </TouchableOpacity>

                        <View style={styles.botaoCadastrar}>
                            <Text style={styles.botaoCadastrarText}>Não possui conta?
                                <TouchableOpacity onPress={() => navigate.navigate('Cadastro')}>
                                    <Text style={{ color: '#15b6df' }}> Click aqui!</Text>
                                </TouchableOpacity>
                            </Text>
                        </View>

                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}