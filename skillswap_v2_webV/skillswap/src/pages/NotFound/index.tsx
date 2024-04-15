import './styles.css'
import IMGmago from '../../assets/img/magoNegro2.png'
import { useNavigate} from 'react-router-dom';

export const PageNotFound = () => {
    const navi = useNavigate()

    return (
        <div id="backgroundNotFound">

            <div id='containerMensagemErroNotFount'>
                <div id='mensagemErroNotFount'>
                    <p id='tituloMensagem'>NOT FOUND</p>
                    <div id='imgMago'>
                        <img src={IMGmago} onClick={()=>navi("/login")} />
                    </div>
                    <p id='descricaoMensagem'>O labirinto virtual te aguarda, viajante, enquanto os portais da inexistência se abrem diante de ti</p>
                </div>
                <p></p>
            </div>

        </div>
    )
}