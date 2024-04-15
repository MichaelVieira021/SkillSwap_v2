package br.com.skillswap.dto.skill;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

import com.fasterxml.jackson.annotation.JsonView;

import br.com.skillswap.dto.view.SkillView;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(description = "Requisição de Habilidade")
public class SkillRequestDTO {
    
    @Schema(description = "Nome da habilidade", example = "Ataque Poderoso")
    @NotBlank
    @JsonView(SkillView.ApenasNome.class)
    private String nome;

    @Schema(description = "Amplificação técnica", example = "5")
    @Positive
    private int tecAmp;

    @Schema(description = "Ataque adicional", example = "10")
    @Positive
    private int atkAdicional;

    @Schema(description = "Duração da habilidade em segundos", example = "30.0")
    @Positive
    private double duracao;

    @Schema(description = "Tempo de resfriamento da habilidade em segundos", example = "60.0")
    @Positive
    private double resfriamento;

    @Schema(description = "URL da foto da habilidade", example = "https://example.com/habilidade.jpg")
    @NotBlank
    private String foto;
}
