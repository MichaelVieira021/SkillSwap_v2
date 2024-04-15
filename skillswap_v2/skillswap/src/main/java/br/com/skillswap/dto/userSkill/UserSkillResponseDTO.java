package br.com.skillswap.dto.userSkill;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(description = "Resposta de Habilidade do Usuário")
public class UserSkillResponseDTO extends UserSkillRequestDTO {
    
	@Schema(description = "ID da habilidade do usuário", example = "1")
    private Long id;
}