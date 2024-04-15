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
import br.com.skillswap.dto.skill.SkillResponseDTO;
import br.com.skillswap.dto.userSkill.ResumoUserSkillResponseDTO;
import br.com.skillswap.dto.userSkill.UserSkillResponseDTO;
import br.com.skillswap.dto.userSkill.UserSkillResponseDTO2;
import br.com.skillswap.dto.usuario.UsuarioResponseDTO;
import br.com.skillswap.modal.Skill;
import br.com.skillswap.modal.UserSkill;
import br.com.skillswap.modal.Usuario;
import br.com.skillswap.modal.exceptions.EmUsoException;
import br.com.skillswap.modal.exceptions.EntidadeNaoEncontradaException;
import br.com.skillswap.modal.exceptions.NegocioException;
import br.com.skillswap.repository.SkillRepository;
import br.com.skillswap.repository.UserSkillRepository;

@Service
public class UserSkillService {
	
	@Autowired
	private UserSkillRepository userSkillRepository;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private SkillService skillService;
	
	@Autowired
	private SkillRepository skillRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	public Page<ResumoUserSkillResponseDTO> obterTodos(@PageableDefault(size = 9) Long userId,  Pageable pageable){
		Usuario userResponse = usuarioService.obterPorId(userId);
		Page<UserSkill> skillsUser = userSkillRepository.findByUsuario(userResponse, pageable);
		
		for(UserSkill uSkill : skillsUser) {
			if(uSkill.getLevel() > 1) {
				Skill skill = uSkill.getSkill();
				skill.setAtkAdicional((int) (skill.getAtkAdicional() + (skill.getAtkAdicional() * (0.2 * uSkill.getLevel()))));
				skill.setTecAmp((int) (skill.getTecAmp() + (skill.getTecAmp() * (0.2 * uSkill.getLevel()))));
				skill.setResfriamento(skill.getResfriamento() - (skill.getResfriamento() * (0.005 * uSkill.getLevel())));
				skill.setDuracao(skill.getDuracao() + (skill.getDuracao() * (0.04 * uSkill.getLevel())));
			}
		}
		List<ResumoUserSkillResponseDTO> user = skillsUser.getContent()
			.stream()
			.map(skillUser -> mapper.map(skillUser, ResumoUserSkillResponseDTO.class))
			.collect(Collectors.toList());
		
		Page<ResumoUserSkillResponseDTO> skillsUserPage = new PageImpl<>(user, pageable, skillsUser.getTotalElements());
		
		return skillsUserPage;
		
		
	}
	
	public UserSkillResponseDTO2 obterSkillUser(Long userId, Long skillId){
		Usuario user = mapper.map(usuarioService.obterPorId(userId), Usuario.class);
		Skill skillE = mapper.map(skillService.obterPorId(skillId), Skill.class);
		Optional<UserSkill> optSkillUser = userSkillRepository.findByUsuarioAndSkill(user, skillE);
		
		if(optSkillUser.isPresent() && optSkillUser.get().getLevel() > 1) {
			Skill skill = optSkillUser.get().getSkill();
			skill.setAtkAdicional((int) (skill.getAtkAdicional() + (skill.getAtkAdicional() * (0.2 * optSkillUser.get().getLevel()))));
			skill.setTecAmp((int) (skill.getTecAmp() + (skill.getTecAmp() * (0.2 * optSkillUser.get().getLevel()))));
			skill.setResfriamento(skill.getResfriamento() - (skill.getResfriamento() * (0.005 * optSkillUser.get().getLevel())));
			skill.setDuracao(skill.getDuracao() + (skill.getDuracao() * (0.04 * optSkillUser.get().getLevel())));
			}else {
				throw new NegocioException("O usuário "+user.getLogin()+" não possui esta skill!");
			}
		
		return mapper.map(optSkillUser.get(), UserSkillResponseDTO2.class);	
	}
	
	@Transactional
	public UserSkillResponseDTO adicionar(Long idUser, Long idSkill, Long level){
		validarLevel(level);
		Usuario user = mapper.map(usuarioService.obterPorId(idUser), Usuario.class);
		Skill skill = mapper.map(skillService.obterPorId(idSkill), Skill.class);
		
		if(userSkillRepository.findByUsuarioAndSkill(user, skill).isPresent()) {
			throw new EmUsoException("O usuário "+user.getLogin()+" já possui esta skill!");
		};
		UserSkill userSkillModel = new UserSkill();
		userSkillModel.setSkill(skill);
		userSkillModel.setUsuario(user);
		userSkillModel.setLevel(level);
		userSkillModel = userSkillRepository.save(userSkillModel);
		
		return mapper.map(userSkillModel, UserSkillResponseDTO.class);
	}
	
	public Page<ResumoUserSkillResponseDTO> obterTodosLevel(Long userId, Long level, String operacao, Pageable pageable){
		Usuario userResponse = usuarioService.obterPorId(userId);
		Page<UserSkill> skillsUser;
		
		if(operacao == null)operacao = "=";
		switch(operacao) {
		case ">":
			skillsUser = userSkillRepository
			.findLevelByUsuarioMaiorQue(mapper.map(userResponse, Usuario.class), level, pageable);
			break;
		case "<":
			skillsUser = userSkillRepository
			.findLevelByUsuarioMenorQue(mapper.map(userResponse, Usuario.class), level, pageable);
			break;
		case "=":
			skillsUser = userSkillRepository
			.findLevelByUsuarioIgualA(mapper.map(userResponse, Usuario.class), level, pageable);
			break;
		default:
			throw new NegocioException("Operacao invalida, escolha entre [<],[>],[=]");
		}
		validarLevel(level);
//		if(operacao != ">" || operacao != "<" || operacao != "=") {
//			throw new NegocioException("Operacao invalida, escolha entre [<],[>],[=]");
//		}
//		Page<UserSkill> skillsUser = userSkillRepository
//				.findLevelByUsuario(mapper.map(userResponse, Usuario.class), level, operacao, pageable);
		
		for(UserSkill uSkill : skillsUser) {
			if(uSkill.getLevel() > 1) {
				Skill skill = uSkill.getSkill();
				skill.setAtkAdicional((int) (skill.getAtkAdicional() + (skill.getAtkAdicional() * (0.2 * uSkill.getLevel()))));
				skill.setTecAmp((int) (skill.getTecAmp() + (skill.getTecAmp() * (0.2 * uSkill.getLevel()))));
				skill.setResfriamento(skill.getResfriamento() - (skill.getResfriamento() * (0.005 * uSkill.getLevel())));
				skill.setDuracao(skill.getDuracao() + (skill.getDuracao() * (0.04 * uSkill.getLevel())));
			}
		}
		List<ResumoUserSkillResponseDTO> listSkillUser = skillsUser.getContent()
			.stream()
			.map(skillUser -> mapper.map(skillUser, ResumoUserSkillResponseDTO.class))
			.collect(Collectors.toList());
		
		return new PageImpl<>(listSkillUser, pageable, skillsUser.getTotalElements());
		
	}
	
	public Page<SkillResponseDTO> obterTodasSkillsUserNaoTem(Long userId, Pageable pageable){
		Usuario userResponse = usuarioService.obterPorId(userId);
		Page<Skill> skillsUser = skillRepository.findByUsuarioNotBySkill(userResponse, pageable);
	    List<SkillResponseDTO> skillsNaoPresentes4 = skillsUser.getContent()
			.stream()
			.map(skill -> mapper.map(skill, SkillResponseDTO.class))
			.collect(Collectors.toList());	
		
		return new PageImpl<>(skillsNaoPresentes4, pageable, skillsUser.getTotalElements());
	}
	
	@Transactional
	public void levelUp(Long usuarioId, Long skillId) {
		operacao(usuarioId, skillId, true);
	}
	
	@Transactional
	public void levelDown(Long usuarioId, Long skillId) {
		operacao(usuarioId, skillId, false);
	}
	
	public void operacao(Long usuarioId, Long skillId, Boolean operacao) {
		Usuario user = mapper.map(usuarioService.obterPorId(usuarioId), Usuario.class);
		Skill skill = mapper.map(skillService.obterPorId(skillId), Skill.class);
		Optional<UserSkill> optSkillUser = userSkillRepository.findByUsuarioAndSkill(user, skill);
		
		if(optSkillUser.isPresent()) {
			UserSkill userSkill = optSkillUser.get();
			if(operacao) {
				validarLevel(userSkill.getLevel() + 1 );
				userSkill.setLevel(userSkill.getLevel() + 1);				
			}else {
				validarLevel(userSkill.getLevel() - 1 );
				userSkill.setLevel(userSkill.getLevel() - 1);				
			}
			userSkill = userSkillRepository.save(userSkill);
		}else {
			throw new EntidadeNaoEncontradaException("Associação não encontrada!!");
		}
	}
	
	public void validarLevel(Long id) {
		if(id < 1 || id > 20) 
			throw new NegocioException("O level deve estar entre [1] e [20].");
	}
	
	public void deletar(Long usuarioId, Long skillId) {
		Usuario user = mapper.map(usuarioService.obterPorId(usuarioId), Usuario.class);
		Skill skill = mapper.map(skillService.obterPorId(skillId), Skill.class);
		Optional<UserSkill> optSkillUser = userSkillRepository.findByUsuarioAndSkill(user, skill);
		
		if(optSkillUser.isPresent()) {
			userSkillRepository.deleteById(optSkillUser.get().getId());			
		}else {
			throw new EntidadeNaoEncontradaException("Associação não encontrada!!");
		}
	}
}
