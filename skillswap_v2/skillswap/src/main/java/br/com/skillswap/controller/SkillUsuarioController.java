package br.com.skillswap.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import br.com.skillswap.configs.PageableTranslator;
import br.com.skillswap.dto.skill.SkillResponseDTO;
import br.com.skillswap.dto.userSkill.ResumoUserSkillResponseDTO;
import br.com.skillswap.dto.userSkill.UserSkillResponseDTO2;
import br.com.skillswap.repository.UserSkillRepository;
import br.com.skillswap.service.UserSkillService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("usuarioskill/{usuarioId}/skill")
public class SkillUsuarioController {
	
	@Autowired
	UserSkillService userSkillService;
	
	@Autowired
	UserSkillRepository userSkillRepository;
	
	@Operation(summary = "Associar skill a usuario", method = "POST")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "200", description = "Adicionado com sucesso"),
		@ApiResponse(responseCode = "400", description = "Paramentros inválidos"),
		@ApiResponse(responseCode = "404", description = "Paramentros inválidos"),
		@ApiResponse(responseCode = "401", description = "Não autenticado"),
		@ApiResponse(responseCode = "500", description = "Erro interno"),
	})
	@PostMapping(name = "Associar skill a usuario", value = "/{skillId}/level/{level}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void adicionarSkill(
			@PathVariable Long usuarioId, 
			@PathVariable Long skillId, 
			@PathVariable Long level){
		userSkillService.adicionar(usuarioId, skillId, level);
	}
	
	@Operation(summary = "Remover skill do usuario", method = "DELETE")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "204", description = "Removido com sucesso"),
		@ApiResponse(responseCode = "400", description = "Paramentros inválidos"),
		@ApiResponse(responseCode = "401", description = "Não autenticado"),
		@ApiResponse(responseCode = "500", description = "Erro interno"),
	})
	@DeleteMapping(value = "/{skillId}", name="Remover skill do usuario")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deletarSkillUser(@PathVariable Long usuarioId, @PathVariable Long skillId){
		userSkillService.deletar(usuarioId, skillId);
	}
	
	@Operation(summary = "Subir nivel skill", method = "PATCH")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "204", description = " com sucesso"),
		@ApiResponse(responseCode = "400", description = "Paramentros inválidos"),
		@ApiResponse(responseCode = "401", description = "Não autenticado"),
		@ApiResponse(responseCode = "500", description = "Erro interno"),
	})
	@PatchMapping("/{skillId}/level/up")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void levelUp(@PathVariable Long usuarioId, @PathVariable Long skillId){
		userSkillService.levelUp(usuarioId, skillId);	
	}
	
	@Operation(summary = "Diminuir nivel skill", method = "PATCH")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "204", description = " com sucesso"),
		@ApiResponse(responseCode = "400", description = "Paramentros inválidos"),
		@ApiResponse(responseCode = "401", description = "Não autenticado"),
		@ApiResponse(responseCode = "500", description = "Erro interno"),
	})
	@PatchMapping("/{skillId}/level/down")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void levelDown(@PathVariable Long usuarioId, @PathVariable Long skillId){
		userSkillService.levelDown(usuarioId, skillId);		
	}
	
	@Operation(summary = "Todas skills associadas ao usuario", method = "GET")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "204", description = "Buscar realizada com sucesso"),
		@ApiResponse(responseCode = "400", description = "Paramentros inválidos"),
		@ApiResponse(responseCode = "401", description = "Não autenticado"),
		@ApiResponse(responseCode = "500", description = "Erro interno"),
	})
	@GetMapping
	public Page<ResumoUserSkillResponseDTO> obterTodosSkillsUser(
			@PathVariable Long usuarioId,
//			@RequestParam(required = false) Long Level,
			@RequestParam(required = false) Long level,
			@RequestParam(required = false) String operacao,
			@PageableDefault(size = 20) Pageable pageable){
			
		pageable = traduzirPageable(pageable);
		if(level == null) {
			return userSkillService.obterTodos(usuarioId, pageable);			
		}else {
			return userSkillService.obterTodosLevel(usuarioId, level,operacao, pageable);
		}
//		}
	}
	
	@GetMapping(value= "/skillsUserNaoTem", name="SKILL USER NÃO POSSUI")
	public ResponseEntity<Page<SkillResponseDTO>> obterTodosSkillUserNot(@PathVariable Long usuarioId, Pageable pageable){
		pageable = traduzirPageable(pageable);
		
		Page<SkillResponseDTO> teste = userSkillService.obterTodasSkillsUserNaoTem(usuarioId, pageable);
		return ResponseEntity.ok(teste); 
	}
	
	@Operation(summary = "Todas skills associadas ao usuario", method = "GET")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "204", description = "Buscar realizada com sucesso"),
		@ApiResponse(responseCode = "400", description = "Paramentros inválidos"),
		@ApiResponse(responseCode = "401", description = "Não autenticado"),
		@ApiResponse(responseCode = "500", description = "Erro interno"),
	})
	@GetMapping("/{skillId}")
	@ResponseStatus(HttpStatus.OK)
	public UserSkillResponseDTO2 obterSkillsUser(@PathVariable Long usuarioId, @PathVariable Long skillId){
		return userSkillService.obterSkillUser(usuarioId, skillId); 
	}
	
	private Pageable traduzirPageable(Pageable apiPageable) {
		var mapeamento = Map.of(
//				"id", "id",
				"level", "level",
				"skill.id", "skill.id",
				"skill.nome", "skill.nome",
				"skill.tecAmp", "skill.tecAmp",
				"skill.atkAdicional", "skill.atkAdicional",
				"skill.duracao", "skill.duracao",
				"skill.resfriamento", "skill.resfriamento"
			);
		return PageableTranslator.translate(apiPageable, mapeamento);
	}
}
