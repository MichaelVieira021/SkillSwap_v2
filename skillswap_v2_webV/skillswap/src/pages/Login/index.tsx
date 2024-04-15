
import { useContext, useEffect, useState } from 'react'
import { InputSenha } from '../../components/InputSenha';
import skillswaploginIMG from '../../assets/img/00135-3029027793.png';
import { LoginContext } from '../../contexts/LoginContext';
import { Link } from 'react-router-dom';
import { InputLogin } from '../../components/InputLogin';
import Checkbox from '@mui/material/Checkbox';
import {  purple } from '@mui/material/colors';
import { useForm } from 'react-hook-form';
import { 
    BackgroundLogin, 
    BotaoLogin, 
    ContainerFormularioLogin, 
    ContainerFormularioLoginCompleto,
    ContainerImagemFormularioLogin, 
    ContainerInputs, GravadorDeSenha, 
    ImagemFormularioLogin, 
    TextoLogin, 
    TituloLogin 
} from './styles';

interface dadosUsuario {
    login: string
    senha: string
}

export const Login = () => {
    const {register, handleSubmit, watch, setValue} = useForm<dadosUsuario>();
    const { verificarLogin } = useContext(LoginContext);
    const [gravarSenha, setGravarSenha] = useState<boolean>(false);

    useEffect(()=> {
        const dadosSalvos = localStorage.getItem('gravarSenha');
        if(dadosSalvos){
            const salvos = JSON.parse(dadosSalvos);
            Object.entries(salvos).forEach(([key, value]) => {
                if (key === "login" || key === "senha") {
                    setValue(key, value as string);
                }
            });
            setGravarSenha(true)
        }
    }, [])

    useEffect(()=> {}, [verificarLogin])
    useEffect(()=> {}, [gravarSenha])

    const gravarLimparSenhaStorage = () => {
        setGravarSenha(!gravarSenha)

        if(gravarSenha){
            localStorage.removeItem('gravarSenha')
        }
    }

    const teste = (data:dadosUsuario) => {
        verificarLogin(data.login, data.senha, gravarSenha)
    }
    
    const habilitarCampoLogin = watch("login");
    const habilitarCampoSenha = watch("senha");


    const submitDesabilitado = (
        !habilitarCampoLogin || 
        !habilitarCampoSenha
    )

    return (
        <BackgroundLogin>

            <ContainerFormularioLoginCompleto> 
                <ContainerImagemFormularioLogin>
                    <ImagemFormularioLogin src={skillswaploginIMG} alt="" />
                </ContainerImagemFormularioLogin>

                <ContainerFormularioLogin onSubmit={handleSubmit(teste)}>
                    <ContainerInputs>
                        <TituloLogin>LOGIN</TituloLogin>

                        <InputLogin 
                            placeholder="Login"
                            id="login"
                            nome="login"
                            register={register}
                            value={watch("login") || ""}
                        />

                        <InputSenha 
                            placeholder="Senha"
                            id='senha'
                            nome="senha"
                            register={register}
                        />

                        <GravadorDeSenha>
                            <Checkbox color="secondary" 
                                style={{width: "12px", height: "12px", marginRight: "5px"}}
                                sx={{
                                    color: purple[800],
                                    '&.Mui-checked': {
                                    color: purple[600],
                                    }
                                }}
                                checked={gravarSenha} size="small" 
                                onClick={() => gravarLimparSenhaStorage()} 
                            />
                            <p>Gravar senha</p>
                        </GravadorDeSenha>
                    </ContainerInputs>
                    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', width: "100%"}}>
                    <BotaoLogin disabled={submitDesabilitado} type='submit'>ENTRAR</BotaoLogin>
                    <TextoLogin>Não possui conta?  <Link to={"/Cadastro"}> Cadastre-se</Link></TextoLogin>
                    </div>
                </ContainerFormularioLogin>

            </ContainerFormularioLoginCompleto>
        </BackgroundLogin>
    )
}