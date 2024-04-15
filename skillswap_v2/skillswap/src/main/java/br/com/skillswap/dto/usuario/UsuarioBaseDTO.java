package br.com.skillswap.dto.usuario;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(description = "Requisição/Resposta do Usuário")
public abstract class UsuarioBaseDTO {
    
//	@NotNull
//	@Min(4)
//	@Max(15)
	@Size(min = 4, max = 15)
	@NotBlank
	@Schema(description = "Login do usuário base", example = "MichaelVieira")
    private String login;
}

