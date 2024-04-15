import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, { useContext } from 'react'
import { styles } from './styles'
import background from '../../assets/img/background.gif'
import { InputSenha } from '../../components/InputSenha'
import { InputLogin } from '../../components/InputLogin'
import { useFonts } from 'expo-font';
import { LoginContext } from '../../contexts/LoginContext'
import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'

interface novoUsuario {
    login: string,
    senha: string,
    confirmarSenha: string
}

export const Cadastro = () => {
    const [fontsLoaded] = useFonts({
        'fontSkillSwap': require("../../assets/fonts/DevilCandle.otf"),
    });
    const { control, handleSubmit, watch, setValue } = useForm<novoUsuario>();
    const { cadastrarUsuario } = useContext(LoginContext)
    const navigate = useNavigation<any>();

    const habilitarCampoLogin = watch("login");
    const habilitarCampoSenha = watch("senha");
    const habilitarCampoConfirmarSenha = watch("confirmarSenha");

    const submitDesabilitado = (
        !habilitarCampoLogin ||
        !habilitarCampoSenha ||
        !habilitarCampoConfirmarSenha
    )

    const cadastrarNovoUsuario = (data: novoUsuario) => {
        cadastrarUsuario(data.login, data.senha, data.confirmarSenha);
    }

    return (

        <ImageBackground source={background} style={styles.backgroundCadastro}>
            <View style={styles.containerFormularioCadastroCompleto}>
                <View style={styles.containerFormularioCadastro}>

                    <Text style={[styles.tituloCadastro, { fontFamily: 'fontSkillSwap' }]}>SkillSwap</Text>
                    <Text style={[styles.tituloCadastro, { fontSize: 28, letterSpacing: 9, marginTop: 0 }]}>REGISTER</Text>
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

                        <Controller
                            control={control}
                            name='confirmarSenha'
                            rules={{ required: "confirmação obrigatoria" }}
                            render={({ field: { onChange, value } }) => (
                                <InputSenha
                                    placeholder="confirmarSenha"
                                    id="confirmarSenha"
                                    nome="confirmarSenha"
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                        />

                    </View>

                    <View style={styles.containerCadastroButtons}>
                        <TouchableOpacity style={styles.containerInputsButton}
                            disabled={submitDesabilitado}
                            onPress={handleSubmit(cadastrarNovoUsuario)}>
                            <Text style={styles.botaoCadastroText}>CADASTRAR</Text>
                        </TouchableOpacity>

                        <View style={styles.botaoCadastrar}>
                            <Text style={styles.botaoCadastrarText}>Já possui cadastro?
                                <TouchableOpacity onPress={() => navigate.navigate('Login')}>
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