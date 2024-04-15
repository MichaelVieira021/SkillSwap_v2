package br.com.skillswap.dto.userSkill;

import br.com.skillswap.dto.skill.SkillResponseDTO;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResumoUserSkillResponseDTO {
    
	private Long level;
	private Long id;
	private SkillResponseDTO skill;
}