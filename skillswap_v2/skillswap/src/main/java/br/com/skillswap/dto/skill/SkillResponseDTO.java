package br.com.skillswap.dto.skill;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(description = "Resposta de Habilidade")
public class SkillResponseDTO extends SkillRequestDTO {
    
    @Schema(description = "ID da habilidade", example = "1")
    private Long id;
}