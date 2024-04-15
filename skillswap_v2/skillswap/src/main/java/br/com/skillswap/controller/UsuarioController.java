package br.com.skillswap.controller;

import java.util.Map;
import javax.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import br.com.skillswap.configs.PageableTranslator;
import br.com.skillswap.dto.usuario.UsuarioAlterarLogin;
import br.com.skillswap.dto.usuario.UsuarioAlterarSenha;
import br.com.skillswap.dto.usuario.UsuarioLoginRequestDTO;
import br.com.skillswap.dto.usuario.UsuarioLoginResponseDTO;
import br.com.skillswap.dto.usuario.UsuarioRequestDTO;
import br.com.skillswap.dto.usuario.UsuarioResponseDTO;
import br.com.skillswap.security.JWTService;
import br.com.skillswap.service.UsuarioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping(value = "/usuarios", produces = {"application/json"})
@Tag(name = "Funcionalidades do usuarios")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private JWTService jwtService;
	
	@Operation(summary = "Pesquisa todos usuarios", method = "GET")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "200", description = "Busca realizada com sucesso"),
		@ApiResponse(responseCode = "400", description = "Paramentros inválidos"),
		@ApiResponse(responseCode = "401", description = "Não autenticado"),
		@ApiResponse(responseCode = "500", description = "Erro ao realizar busca dos Dados"),
	})
	@GetMapping
	public ResponseEntity<Page<UsuarioResponseDTO>> obterTodos(Pageable pageable){
		pageable = traduzirPageable(pageable);
		return ResponseEntity.ok(usuarioService.obterTodos(pageable));
	}
	
	@Operation(summary = "Pesquisa usuario pelo ID", method = "GET")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "200", description = "Busca realizada com sucesso"),
		@ApiResponse(responseCode = "400", description = "Paramentros inválidos"),
		@ApiResponse(responseCode = "401", description = "Não autenticado"),
		@ApiResponse(responseCode = "500", description = "Erro ao realizar busca dos Dados"),
	})
	@GetMapping(value = "/{id}")
	public ResponseEntity<UsuarioResponseDTO> obterPorId(@PathVariable Long id){
		return ResponseEntity.ok(mapper.map(usuarioService.obterPorId(id), UsuarioResponseDTO.class));
	}

	@Operation(summary = "Pesquisa usuario pelo LOGIN", method = "GET")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "200", description = "Busca realizada com sucesso"),
		@ApiResponse(responseCode = "400", description = "Paramentros inválidos"),
		@ApiResponse(responseCode = "401", description = "Não autenticado"),
		@ApiResponse(responseCode = "500", description = "Erro ao realizar busca dos Dados"),
	})
	@GetMapping(value = "/login/{login}")
	public ResponseEntity<UsuarioResponseDTO> obterPorLogin(@RequestParam String login){
		return ResponseEntity.ok(
				mapper.map(usuarioService.obterPorLogin(login), UsuarioResponseDTO.class) );
	}

	@Operation(summary = "Cadastrar um novo usuario", method = "POST")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "201", description = "Cadastro realizado com sucesso"),
		@ApiResponse(responseCode = "400", description = "Paramentros inválidos"),
		@ApiResponse(responseCode = "401", description = "Não autenticado"),
		@ApiResponse(responseCode = "409", description = "Usuario já cadastrado"),
		@ApiResponse(responseCode = "500", description = "Erro ao realizar busca dos Dados"),
	})
	@PostMapping(name= "CADASTRAR",value = "/cadastrar")
	public ResponseEntity<UsuarioResponseDTO> adicionar(@RequestBody @Valid UsuarioRequestDTO usuarioRequest){		
		return ResponseEntity.status(201).body(usuarioService.adicionar(usuarioRequest));
	}
	
//	@Operation(summary = "Atualizar usuario", method = "PUT")
//	@ApiResponses(value = {
//		@ApiResponse(responseCode = "200", description = "Atualizado com sucesso"),
//		@ApiResponse(responseCode = "400", description = "Paramentros inválidos"),
//		@ApiResponse(responseCode = "401", description = "Não autenticado"),
//		@ApiResponse(responseCode = "409", description = "Usuario já cadastrado"),
//		@ApiResponse(responseCode = "500", description = "Erro ao realizar busca dos Dados"),
//	})
//	@PutMapping(value = "/{id}", name="ATUALIZAR", consumes = MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<UsuarioResponseDTO> atualizar(@PathVariable Long id, @RequestBody UsuarioRequestDTO usuarioRequest){
//		return ResponseEntity.status(200).body(usuarioService.atualizar(id, usuarioRequest));
//	}
	
	@PutMapping("{id}/alterar/login")
	public void alterarLogin(@PathVariable Long id, @RequestBody UsuarioAlterarLogin usuarioRequest){
		usuarioService.alterarLogin(id, usuarioRequest);
	}
	
	@PutMapping("{id}/alterar/senha")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void alterarSenha(@PathVariable Long id, @RequestBody @Valid UsuarioAlterarSenha usuarioRequest){
		usuarioService.alterarSenha(id, usuarioRequest);
	}
	
	@Operation(summary = "Deletar usuario", method = "DELETE")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "204", description = "Deletado com sucesso"),
		@ApiResponse(responseCode = "400", description = "Paramentros inválidos"),
		@ApiResponse(responseCode = "401", description = "Não autenticado"),
		@ApiResponse(responseCode = "500", description = "Erro ao realizar busca dos Dados"),
	})
	@DeleteMapping(value = "/{id}", name="DELETAR")
	public ResponseEntity<?> deletar(@PathVariable Long id){
		usuarioService.deletar(id);
		return ResponseEntity.status(204).build();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	@Operation(summary = "Efetuar Login", method = "POST")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "200", description = "Logado com sucesso"),
		@ApiResponse(responseCode = "400", description = "Login ou senha incorretos"),
		@ApiResponse(responseCode = "500", description = "Erro ao realizar busca dos Dados"),
	})
	@PostMapping(value= "/login", name= "LOGAR")
    public ResponseEntity<UsuarioLoginResponseDTO> logar(@RequestBody @Valid UsuarioLoginRequestDTO usuariologinRequest){
        return ResponseEntity.status(200)
        		.body(usuarioService.logar(usuariologinRequest.getLogin(), usuariologinRequest.getSenha()));
    }
	
	@Operation(summary = "Verificar token", method = "POST")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "200", description = "Token válido"),
		@ApiResponse(responseCode = "401", description = "Token inválido/expirado"),
		@ApiResponse(responseCode = "500", description = "Erro ao realizar busca dos Dados"),
	})
	@PostMapping(value= "/validar/token", name= "VERIFICAR TOKEN")
    public ResponseEntity<String> validarToken(@RequestParam String token) {
	    if (token.startsWith("Bearer ")) {
	        token = token.substring(7);
	    }
	    
        if (jwtService.validarToken(token)) {
            return ResponseEntity.ok("Token válido");
        } else {
            return ResponseEntity.status(401).body("Token inválido ou expirado");
        }
    }
	
	private Pageable traduzirPageable(Pageable apiPageable) {
		var mapeamento = Map.of(
				"id", "id",
				"login", "login",
				"dtCadastro", "dtCadastro"
			);
		return PageableTranslator.translate(apiPageable, mapeamento);
	}
}
	




















//	@Operation(summary = "Buscar todas skills de determinado usuario", method = "GET")
//	@ApiResponses(value = {
//		@ApiResponse(responseCode = "200", description = "Busca realizada com sucesso"),
//		@ApiResponse(responseCode = "400", description = "Paramentros inválidos"),
//		@ApiResponse(responseCode = "401", description = "Não autenticado"),
//		@ApiResponse(responseCode = "500", description = "Erro ao realizar busca dos Dados"),
//	})
//	@GetMapping(value= "/skillsUser", name="OBTER TODAS SKILLS USUARIO")
//	public ResponseEntity<List<UserSkillResponseDTO>> obterTodosSkillUser(@RequestParam Long userId){
//		return ResponseEntity.ok(userSkillService.obterTodos(userId)); 
//	}
		
//	@Operation(summary = "Adicionar skill ao usuario", method = "POST")
//	@ApiResponses(value = {
//		@ApiResponse(responseCode = "201", description = "Adicionado com sucesso"),
//		@ApiResponse(responseCode = "400", description = "Paramentros inválidos"),
//		@ApiResponse(responseCode = "401", description = "Não autenticado"),
//		@ApiResponse(responseCode = "500", description = "Erro ao realizar busca dos Dados"),
//	})
//	@PostMapping(value= "/adicionar/skill", name= "ADICIONAR SKILL USER")
//	public ResponseEntity<UserSkillResponseDTO> adicionarSkill(@RequestParam Long idUser, @RequestParam Long idSkill, @RequestParam Long level){
//		return ResponseEntity.status(201).body(userSkillService.adicionar(idUser, idSkill, level));
//	}
	
//	@Operation(summary = "Aumentar level skill", method = "PATCH")
//	@ApiResponses(value = {
//		@ApiResponse(responseCode = "200", description = "Atualizado com sucesso"),
//		@ApiResponse(responseCode = "400", description = "Paramentros inválidos"),
//		@ApiResponse(responseCode = "401", description = "Não autenticado"),
//		@ApiResponse(responseCode = "500", description = "Erro ao realizar busca dos Dados"),
//	})
//	@PatchMapping(value= "/levelUp/skill/{id}", name= "LEVELUP")
//	public ResponseEntity<UserSkillResponseDTO> levelUp(@PathVariable Long id){
//		
//		return ResponseEntity.status(200).body(userSkillService.levelUp(id));		
//	}
//	
//	@Operation(summary = "Diminuir level skill", method = "PATCH")
//	@ApiResponses(value = {
//		@ApiResponse(responseCode = "200", description = "Atualizado com sucesso"),
//		@ApiResponse(responseCode = "400", description = "Paramentros inválidos"),
//		@ApiResponse(responseCode = "401", description = "Não autenticado"),
//		@ApiResponse(responseCode = "500", description = "Erro ao realizar busca dos Dados"),
//	})
//	@PatchMapping(value= "/levelDown/skill/{id}", name= "LEVELDOWN")
//	public ResponseEntity<UserSkillResponseDTO> levelDown(@PathVariable Long id){
//		
//		return ResponseEntity.status(200).body(userSkillService.levelDown(id));		
//	}
//	@Operation(summary = "Deletar skill do usuario", method = "DELETE")
//	@ApiResponses(value = {
//		@ApiResponse(responseCode = "204", description = "Deletado com sucesso"),
//		@ApiResponse(responseCode = "400", description = "Paramentros inválidos"),
//		@ApiResponse(responseCode = "401", description = "Não autenticado"),
//		@ApiResponse(responseCode = "500", description = "Erro ao realizar busca dos Dados"),
//	})
//	@DeleteMapping("/deletar/skill/{id}")
//	public ResponseEntity<?> deletarSkillUser(@PathVariable Long id){
//		userSkillService.deletar(id);
//		return ResponseEntity.status(204).build();
//	}
	

