package br.com.skillswap.service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import br.com.skillswap.dto.usuario.UsuarioAlterarLogin;
import br.com.skillswap.dto.usuario.UsuarioAlterarSenha;
import br.com.skillswap.dto.usuario.UsuarioLoginResponseDTO;
import br.com.skillswap.dto.usuario.UsuarioRequestDTO;
import br.com.skillswap.dto.usuario.UsuarioResponseDTO;
import br.com.skillswap.modal.Usuario;
import br.com.skillswap.modal.exceptions.EmUsoException;
import br.com.skillswap.modal.exceptions.NegocioException;
import br.com.skillswap.modal.exceptions.UsuarioNaoEncontradoException;
import br.com.skillswap.repository.UsuarioRepository;
import br.com.skillswap.security.JWTService;

@Service
public class UsuarioService {
	private static final String BEARER = "Bearer ";
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
    private JWTService jwtService;

	@Autowired
    private AuthenticationManager authenticationManager;

	@Autowired
    private PasswordEncoder passwordEncoder;
	
	@Autowired
	private ModelMapper mapper;
	
	public Page<UsuarioResponseDTO> obterTodos(Pageable pageable){
		Page<Usuario> usuarios = usuarioRepository.findAll(pageable);

		List<UsuarioResponseDTO> users = usuarios.getContent()
			.stream()
			.map(usuario -> mapper.map(usuario, UsuarioResponseDTO.class))
			.collect(Collectors.toList());	
		Page<UsuarioResponseDTO> usuariosPage = new PageImpl<>(users, pageable, usuarios.getTotalElements());
		return usuariosPage;
	}
	
	public Usuario obterPorId(Long id){
		return usuarioRepository.findById(id).orElseThrow(() -> 
			new UsuarioNaoEncontradoException(id));
	}
	
	public UsuarioResponseDTO adicionar(UsuarioRequestDTO usuarioRequest){
		uniqueLOGIN(usuarioRequest.getLogin(), 0L);
		Usuario usuarioModel = mapper.map(usuarioRequest, Usuario.class);
		String senha =  passwordEncoder.encode(usuarioModel.getSenha());
		usuarioModel.setSenha(senha);
		usuarioModel = usuarioRepository.save(usuarioModel);
		return mapper.map(usuarioModel, UsuarioResponseDTO.class);
	}
	
	@Transactional
	public UsuarioResponseDTO alterarLogin(Long id, UsuarioAlterarLogin usuarioRequest){
		Usuario user = obterPorId(id);
		uniqueLOGIN(usuarioRequest.getLogin(), id);
		user.setLogin(usuarioRequest.getLogin());	
		return mapper.map(usuarioRepository.save(user), UsuarioResponseDTO.class);
	}
	
	@Transactional
	public void alterarSenha(Long id, UsuarioAlterarSenha usuarioRequest){
		Usuario user = obterPorId(id);
		verificarSenhaAtual(user.getLogin(), usuarioRequest.getSenhaAtual());
		String senhaNova =  passwordEncoder.encode(usuarioRequest.getSenhaNova());
		user.setSenha(senhaNova);
		user = usuarioRepository.save(user);	
	}
	
	public void deletar(Long id) {
		obterPorId(id);
		usuarioRepository.deleteById(id);
	}
	
	public Usuario obterPorLogin(String login){
        return usuarioRepository.findByLogin(login)
        		.orElseThrow(() -> new UsuarioNaoEncontradoException("Nenhum registro encontrado para o login: " + login));
    }

	public void uniqueLOGIN(String usuarioLogin, Long id){ 
		if(usuarioRepository.findByLogin(usuarioLogin).isPresent()) {
			throw new EmUsoException("Login já cadastrado!");
		}
	}
	
	public UsuarioLoginResponseDTO logar(String login, String senha){
		try{
			Authentication autenticacao = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(login, senha,Collections.emptyList()));
		
			SecurityContextHolder.getContext().setAuthentication(autenticacao);
			String token =  BEARER + jwtService.gerarToken(autenticacao);
			UsuarioResponseDTO usuarioResponse = mapper.map(obterPorLogin(login), UsuarioResponseDTO.class);
			return new UsuarioLoginResponseDTO(token, usuarioResponse);

		} catch (RuntimeException e){
			throw new NegocioException("Login ou senha incorretos.");
		}
    }
	
	public Boolean verificarSenhaAtual(String login, String senha){
		try{
			authenticationManager.authenticate(new 
					UsernamePasswordAuthenticationToken(login, senha,Collections.emptyList()));
			return true;
		} catch (Exception e){
			throw new NegocioException("Senha atual incorreta");
		}
    }
}
