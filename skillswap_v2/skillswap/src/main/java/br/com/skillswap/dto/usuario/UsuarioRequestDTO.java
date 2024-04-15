package br.com.skillswap.dto.usuario;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(description = "Requisição do Usuário")
public class UsuarioRequestDTO extends UsuarioBaseDTO {
    
	@Schema(description = "Senha do usuário", example = "1234")
//	@NotBlank
//	@Min(4)
//	@Max(15)
	@NotBlank
	@Size(min = 4, max = 15)
    private String senha;
}
