package br.com.skillswap.dto.usuario;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(description = "Resposta do Usuário")
public class UsuarioResponseDTO extends UsuarioBaseDTO {
    
	@Schema(description = "ID do usuário", example = "1")
    private Long id;
	
	@Schema(description = "Data de cadastro do usuário", example = "07/01/2024")
    private String dtCadastro;
}