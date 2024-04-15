package br.com.skillswap.configs;

import java.util.Arrays;
import java.util.List;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import br.com.skillswap.dto.usuario.UsuarioRequestDTO;
import br.com.skillswap.modal.Skill;
import br.com.skillswap.repository.SkillRepository;
import br.com.skillswap.service.UsuarioService;

@Component
public class DadosIniciais {
	
	@Autowired
	private SkillRepository skillRepository;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@PostConstruct
    public void carregarDadosIniciais() {
        if (skillRepository.count() == 0) {
        	skillRepository.saveAll(getSkills());
        	usuarioService.adicionar(getUsuario());
        	
        }
    }
	
	private UsuarioRequestDTO getUsuario() {
		UsuarioRequestDTO usuarioRequest = new UsuarioRequestDTO();
		usuarioRequest.setLogin("MichaelVieira");
		usuarioRequest.setSenha("1234");

		return usuarioRequest;			
	}
	
	private List<Skill> getSkills() {
        return Arrays.asList(
        		new Skill("Atirador de Ossos", 15, 128, 2.2, 1.5, "https://1.bp.blogspot.com/-dN00pp-lwiY/X8MC6DetBrI/AAAAAAABfTA/9-MINDFFRWIbFBelo5bDeUv5jufDH5WtQCLcBGAsYHQ/s0/29.jpg"),
        		new Skill("Dardo de Ossos", 45, 74, 2.4, 1.5, "https://1.bp.blogspot.com/-t4FdL2R-4CE/X8MC6Ws8JmI/AAAAAAABfTI/fCas3LtA5Gs352CzfGFNUS9WJMkUNHnnQCLcBGAsYHQ/s0/30.jpg"),
        		new Skill("Raio Negro", 35, 105, 2.2, 1.5, "https://1.bp.blogspot.com/-ZRA9AN8sLjM/X8MC6slzBkI/AAAAAAABfTM/vck4tFcyO_gF4q6PX7B4p5dtPd64J34NQCLcBGAsYHQ/s0/31.jpg"),
        		new Skill("Explosão Negra", 15, 97, 2.1, 1.7, "https://1.bp.blogspot.com/-FJCaYMR2I2s/X8MC6oC-6EI/AAAAAAABfTQ/94YQFHs2_dw4AW3415HvDln-7oI3_9tGQCLcBGAsYHQ/s0/32.jpg"),
        		new Skill("Triturador da Morte", 25, 173, 2.5, 1.7, "https://1.bp.blogspot.com/-I8IJOOLxWws/X8MC2n8BmcI/AAAAAAABfSA/_upHRXk5yegBcGEvujrDJDNboHiUqu0xgCLcBGAsYHQ/s0/14.jpg"),
        		new Skill("Balista de Ossos", 55, 140, 2.8, 1.8, "https://1.bp.blogspot.com/-uE1-ueN2olQ/X8MC2yKeNTI/AAAAAAABfSE/k4SgWIOX6pE0PoIeTSKBWpJkzUfpp3kIQCLcBGAsYHQ/s0/15.jpg"),
        		new Skill("Difusão de Raio Negro", 45, 171, 2.5, 1.7, "https://1.bp.blogspot.com/-gZNwrEWbwrc/X8MC2-vR5JI/AAAAAAABfSI/tpcIQwElO1IoQLvqnW15qPXSogJk0NROACLcBGAsYHQ/s0/16.jpg"),
        		new Skill("Queda Noturna", 25, 169, 2.5, 1.8, "https://1.bp.blogspot.com/-dkKv475MlcI/X8MC3MItz7I/AAAAAAABfSM/vdAUVoB7FDI5EuDtoDuvBErdzijNM4vSQCLcBGAsYHQ/s0/17.jpg"),
        		new Skill("Queda das Sombras", 55, 191, 4.8, 1.5, "https://1.bp.blogspot.com/-qfNWPMSMx28/X8MC7dacm4I/AAAAAAABfTc/1MJVtpmsGwMkbqGM2Min-JKzUZfFh2l1QCLcBGAsYHQ/s0/35.jpg"),
        		new Skill("Corrente Negra", 85, 126, 5.3, 1.5, "https://1.bp.blogspot.com/-vyYJODtsUPk/X8MC7gfjaWI/AAAAAAABfTg/_XKhCOjTmb8Mx9PsKqOjj_WFsXYZYTPCQCLcBGAsYHQ/s0/36.jpg"),
        		new Skill("Gula de Ossos", 75, 181, 5.1, 1.7, "https://1.bp.blogspot.com/-h4kTavO_ixw/X8MC8EovdHI/AAAAAAABfTk/J8EISXH580QzLsL5fykP0YT-OTMJdaLxACLcBGAsYHQ/s0/37.jpg"),
        		new Skill("Esmagamento Mortal", 35, 243, 2.6, 2, "https://1.bp.blogspot.com/-iz-h0FeqQMA/X8MC5pW628I/AAAAAAABfS8/LK8AZ71xgKYLNor7DPWOZGs9nECnG4lIwCLcBGAsYHQ/s0/28.jpg"),
        		new Skill("Bomba Assassina", 65, 274, 5.3, 1.7, "https://1.bp.blogspot.com/-SXVIkxfDeS0/X8MC8YQQZwI/AAAAAAABfTo/MSjNOCLy8ywGcPUv7FjJ1ZKJgfZLkJDlQCLcBGAsYHQ/s0/38.jpg"),
        		new Skill("Arranjo Venenoso", 45, 278, 3, 1.8, "https://1.bp.blogspot.com/-PCE_eQF6Fjk/X8MC8UfC33I/AAAAAAABfTs/_9ysQk1H_9AECmnfRr8U2KYerZY6hCJ6QCLcBGAsYHQ/s0/39.jpg"),
        		new Skill("Valsa Demoníaca", 85, 231, 5.3, 1.7, "https://1.bp.blogspot.com/-Sh9-M-LLlYk/X8MC89RNpRI/AAAAAAABfT0/Br6NCRu17_QRglP-8XR_5oX1ObjBX1l8ACLcBGAsYHQ/s0/40.jpg"),
        		new Skill("Dor do Luto", 95, 257, 5.8, 2.3, "https://1.bp.blogspot.com/-sjRpkesaudo/X8MC9DDcfMI/AAAAAAABfT4/mIZ1Zjtz5dcQJY_UjkYzkFaSVMTMBoYaQCLcBGAsYHQ/s0/41.jpg"),
        		new Skill("Vingança da Natureza", 15, 763, 180, 2.2, "https://1.bp.blogspot.com/-1yY-QWOPEwQ/X8MC5dIg8XI/AAAAAAABfS0/ZKo2bcMa9xk42nm4snf2L3S7mTlzYjbaQCLcBGAsYHQ/s0/26.jpg"),
        		new Skill("Enxame de Espíritos", 55, 386, 3.4, 2.2, "https://1.bp.blogspot.com/-D-ACtbxwpCA/X8MC67kwYyI/AAAAAAABfTU/qYEl64x3-OwPiBCpXYYVUTa_rj5kzo5eACLcBGAsYHQ/s0/33.jpg"),
        		new Skill("Consumo da Alma", 45, 331, 2.8, 2, "https://1.bp.blogspot.com/-Ee1psjQQT94/X8MC7Tu_rZI/AAAAAAABfTY/araGAQIMO7YsLomXbYz0bdFNjMbBzv9CACLcBGAsYHQ/s0/34.jpg"),
        		new Skill("Algoz Infernal", 60, 670, 3.2, 2, "https://1.bp.blogspot.com/-Dvf6jY-v7Ew/X8MC48gArJI/AAAAAAABfSs/tLqvGtrEyaUz9obGN8LaLIYTSyVpx2BewCLcBGAsYHQ/s0/24.jpg"),
        		new Skill("Oferenda Infernal", 65, 706, 4.7, 2.2, "https://1.bp.blogspot.com/-QW_c6GtHMlA/X8MC5fZr_II/AAAAAAABfS4/ml_faIxLru0FC8tN6bcE7mayOpAg3HQAgCLcBGAsYHQ/s0/27.jpg"),
        		new Skill("Queda da Matéria Escura", 80, 1208, 5.1, 2.3, "https://1.bp.blogspot.com/-0J0DTvpIsIs/X8MC-9R2wFI/AAAAAAABfUY/q6CTFMJ6Js8LvAQUGm_EoANYPLaQ6fgrgCLcBGAsYHQ/w50-h52/darkmatterfall.png"),
        		new Skill("Redenção Espiritual", 80, 1347, 5.6, 2.3, "https://1.bp.blogspot.com/-FJ_JTf1uASE/X8MC9b9gD4I/AAAAAAABfT8/X6En2_WCh6UQ1dDdRVl0SKD4bXvyIp0KACLcBGAsYHQ/s0/42.jpg"),
        		new Skill("Ceifador da Colheita", 80, 1412, 5.4, 2.4, "https://1.bp.blogspot.com/-uF1hm0kWwn4/X8MC4FQYwwI/AAAAAAABfSg/gwD3QefjZeg4grwAKeE-rvDQDMWNrR7_ACLcBGAsYHQ/s0/21.jpg"),
        		new Skill("Vitória Maligna", 85, 1502, 5.9, 2.5, "https://1.bp.blogspot.com/-ur5vcOpWDD0/X8MC3ScuVDI/AAAAAAABfSU/F1tRrGJ9RGUrU0g5v2L3cOiC6UFy9MGyACLcBGAsYHQ/s0/19.jpg"),
        		new Skill("Explosão de Caixões", 90, 2339, 6.6, 2.5, "https://1.bp.blogspot.com/-NRRqOsLQOA0/X8MC4HfSYwI/AAAAAAABfSc/n95OU1bk5_Y2-iQ_7mMo6A2kv6RsRJ-yQCLcBGAsYHQ/s0/20.jpg"),
        		new Skill("Réquiem Infernal", 100, 3037, 6.6, 2.5, "https://1.bp.blogspot.com/-dHrZhUpCJcU/X8MC3cqlpZI/AAAAAAABfSQ/3cEZ4R-a5s8_o2knP-45ecu2JO88MmZ8QCLcBGAsYHQ/s0/18.jpg")
        );
    }
	
}
