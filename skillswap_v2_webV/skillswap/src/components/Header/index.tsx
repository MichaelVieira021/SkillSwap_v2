import logo2 from "../../assets/img/logo2.png"
import { ImExit } from "react-icons/im";
import './styles.css'
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navi = useNavigate();

    const deslogar = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navi('/login')
    }

    const handleLogoClick = () => {
        window.open('https://www.linkedin.com/in/michaelvieira021/', '_blank');
      };

    return (
        <div id="containerNavBar">
            <div id="containerLogoeNome" onClick={() => handleLogoClick()}>
                <div>
                    <img src={logo2} />
                </div>
                <p>SkillSwap</p>
            </div>

            <nav>
                <ul>
                    <li onClick={() => deslogar()} style={{display: "flex"}}> 
                        <ImExit style={{fontSize: "36px"}}/>
                    </li>
                </ul>
            </nav>
        </div>
    )
}