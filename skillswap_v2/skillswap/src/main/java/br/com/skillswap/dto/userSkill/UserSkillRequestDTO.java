package br.com.skillswap.dto.userSkill;

import javax.validation.constraints.Size;

import br.com.skillswap.dto.skill.SkillResponseDTO;
import br.com.skillswap.dto.usuario.UsuarioResponseDTO;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(description = "Requisição de Habilidade do Usuário")
public class UserSkillRequestDTO {
    
	@Schema(description = "Informações do usuário")
	private UsuarioResponseDTO usuario;
	
	@Schema(description = "Informações da habilidade")
	private SkillResponseDTO skill;
	
	@Schema(description = "Nível de habilidade", example = "3")
	private Long level;
}
