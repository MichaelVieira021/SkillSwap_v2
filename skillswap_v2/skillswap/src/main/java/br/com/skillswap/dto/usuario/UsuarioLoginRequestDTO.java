package br.com.skillswap.dto.usuario;

import javax.validation.constraints.NotBlank;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(description = "Requisição de Login do Usuário")
public class UsuarioLoginRequestDTO {
	
	@NotBlank
	@Schema(description = "Login do usuário", example = "MichaelVieira")
    private String login;
	
	@NotBlank
	@Schema(description = "Senha do usuário", example = "1234")
    private String senha;
}
