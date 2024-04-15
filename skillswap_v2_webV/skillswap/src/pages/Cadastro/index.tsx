import { Link } from 'react-router-dom'
// import './styles.css'
import { useContext, useEffect, useState } from 'react'
import { InputSenha } from '../../components/InputSenha';
import { LoginContext } from '../../contexts/LoginContext';
import skillswaploginIMG from '../../assets/img/00135-3029027793.png'
import { InputLogin } from '../../components/InputLogin';
import { CardError } from '../../components/CardError';
import { useForm } from 'react-hook-form';
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { BackgroundCadastro, BotaoCadastro, ContainerFormularioCadastro, ContainerFormularioCadastroCompleto, ContainerImagemFormularioCadastro, ContainerInputs, ContainerLogin, ImagemFormularioCadastro, TituloCadastro } from './styles';

// const formValidationSchema = zod.object({
//     login: zod.string().min(4, 'Login curto').max(14, "Login muito longo"),
//     senha: zod.string().min(4, 'Senha curta').max(14, "Senha muito longo"),
//     confirmarSenha: zod.string().min(1, 'Confirmacao senha curta').max(14, "Confirmar senha muito longo")
// })

const formValidationSchema = zod.object({
    login: zod.string(),
    senha: zod.string(),
    confirmarSenha: zod.string()
})

interface novoUsuario {
    login: string,
    senha: string,
    confirmarSenha: string
}

export const Cadastro = () => {
    const {register, handleSubmit, watch} = useForm<novoUsuario>({
        resolver: zodResolver(formValidationSchema),
        defaultValues: {
            login: "",
            senha: "",
            confirmarSenha: ""
        }
    });
    const {cadastrarUsuario} = useContext(LoginContext)

    useEffect(()=> {}, [])

    const habilitarCampoLogin = watch("login");
    const habilitarCampoSenha = watch("senha");
    const habilitarCampoConfirmarSenha = watch("confirmarSenha");

    const submitDesabilitado = (
        !habilitarCampoLogin || 
        !habilitarCampoSenha || 
        !habilitarCampoConfirmarSenha
    )

    const cadastrarNovoUsuario = (data:novoUsuario) => {
        console.log(data)
        if(data.senha === data.confirmarSenha){
            cadastrarUsuario(data.login, data.senha);
        }else{
            CardError("senhas não coincidem!");
        }
    }
    return (
        <BackgroundCadastro>
            <ContainerFormularioCadastroCompleto> 
                <ContainerImagemFormularioCadastro>
                    <ImagemFormularioCadastro src={skillswaploginIMG} alt="" />
                </ContainerImagemFormularioCadastro>

                <ContainerFormularioCadastro 
                    onSubmit={handleSubmit(cadastrarNovoUsuario)}
                >
                    <ContainerInputs>
                        <TituloCadastro>REGISTER</TituloCadastro>

                        <InputLogin 
                            placeholder="Login"
                            id="login"
                            register={register}
                            nome="login"
                            value={watch("login") || ""}
                        />

                        <InputSenha 
                            placeholder="Senha"
                            id='senha'
                            register={register}
                            nome="senha"
                        />

                        <InputSenha 
                            placeholder="Confirmar"
                            id='confirmarSenha'
                            nome="confirmarSenha"
                            register={register}
                        />

                    </ContainerInputs>
                    <ContainerLogin>
                        <BotaoCadastro type='submit' disabled={submitDesabilitado}>CADASTRAR</BotaoCadastro>
                        <p>Já possui conta? <Link to={"/login"}> Logar</Link></p>
                    </ContainerLogin>
                </ContainerFormularioCadastro>
            </ContainerFormularioCadastroCompleto>
        </BackgroundCadastro>
    )
}