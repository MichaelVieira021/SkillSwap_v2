package br.com.skillswap.dto.usuario;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UsuarioAlterarSenha {

	@NotBlank
	String senhaAtual;
	
	@NotBlank
	@Size(min = 4, max = 15, message = "Nova senha deve ter entre 4 e 15 caracters.")
	String senhaNova;
}
