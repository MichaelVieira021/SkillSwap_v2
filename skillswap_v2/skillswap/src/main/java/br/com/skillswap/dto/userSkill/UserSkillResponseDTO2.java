package br.com.skillswap.dto.userSkill;

import br.com.skillswap.dto.skill.SkillResponseDTO;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserSkillResponseDTO2 {
    
//    private Long id;
	private Long level;
	private SkillResponseDTO skill;
//	private ResumoUsuarioSkills usuario;
}