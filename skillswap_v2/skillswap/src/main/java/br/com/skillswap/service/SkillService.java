package br.com.skillswap.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Service;
import br.com.skillswap.dto.skill.SkillRequestDTO;
import br.com.skillswap.dto.skill.SkillResponseDTO;
import br.com.skillswap.modal.Skill;
import br.com.skillswap.modal.exceptions.EmUsoException;
import br.com.skillswap.modal.exceptions.SkillNaoEncontradaException;
import br.com.skillswap.repository.SkillRepository;
import br.com.skillswap.repository.UserSkillRepository;

@Service
public class SkillService {
	
	@Autowired
	private SkillRepository skillRepository;
	
	@Autowired
	UserSkillRepository userSkillRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	public Page<SkillResponseDTO> obterTodos(@PageableDefault(size = 20) Pageable pageable){		
		Page<Skill> skills = skillRepository.findAll(pageable);

		List<SkillResponseDTO> skillsModel =  skills.getContent()
			.stream() 
			.map(skill -> mapper.map(skill, SkillResponseDTO.class))
			.collect(Collectors.toList());
		
		Page<SkillResponseDTO> skillsPage = new PageImpl<>(skillsModel, pageable, skills.getTotalElements());
		
		return skillsPage;
	}
	
	public SkillResponseDTO obterPorId(Long id){
		return mapper.map(skillRepository.findById(id).orElseThrow(() -> 
			new SkillNaoEncontradaException(id)), SkillResponseDTO.class);
	}
	
	public SkillResponseDTO adicionar(SkillRequestDTO skillRequest){
		uniqueNAME(skillRequest, 0L);
		Skill skillModel = mapper.map(skillRequest, Skill.class);
		skillModel = skillRepository.save(skillModel);
		
		return mapper.map(skillModel, SkillResponseDTO.class);
	}
	
	public SkillResponseDTO atualizar(Long id, SkillRequestDTO skillRequest){
		uniqueNAME(skillRequest, id);
		obterPorId(id);	
		Skill skillModel = mapper.map(skillRequest, Skill.class);
		skillModel.setId(id);
		skillModel = skillRepository.save(skillModel);
		
		return mapper.map(skillModel, SkillResponseDTO.class);
	}
	
	public void uniqueNAME(SkillRequestDTO skillRequest, Long id){
		Optional<Skill> optSkill =  skillRepository.findByNome(skillRequest.getNome());

		if(optSkill.isPresent() && optSkill.get().getId() != id){ 
			throw new EmUsoException("Nome de skill já cadastrado!");
		}
	}
	
	@Transactional
	public void deletar(Long id) {
		obterPorId(id);
		userSkillRepository.deleteBySkillId(id);
		skillRepository.deleteById(id);
	}
}


//public List<SkillResponseDTO> obterTodosUserNot(Long userId){
//UsuarioResponseDTO userResponse = usuarioService.obterPorId(userId);
//List<Skill> skills = skillRepository.findAll();
////List<Skill> skillsDoUsuario = userSkillRepository.findBySkill(mapper.map(userResponse, Usuario.class));
//List<UserSkill> skillsUser = userSkillRepository.findByUsuarioOrderById(mapper.map(userResponse, Usuario.class));
//
//List<Skill> skillsUsuario = skillsUser.stream()
//        .map(UserSkill::getSkill)
//        .collect(Collectors.toList());
//
//List<Skill> skillsNaoPresentes = skills.stream()
//        .filter(skill -> !skillsUsuario.contains(skill))
//        .collect(Collectors.toList());
//
//
//return skillsNaoPresentes
//	.stream()
//	.map(skill -> mapper.map(skill, SkillResponseDTO.class))
//	.collect(Collectors.toList());	
//}
