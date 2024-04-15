package br.com.skillswap.modal.exceptions;

public class SkillNaoEncontradaException extends EntidadeNaoEncontradaException{

	private static final long serialVersionUID = 1L;

	public SkillNaoEncontradaException(String message) {
		super(message);
	}
	
	public SkillNaoEncontradaException(Long idSkill) {
		super(String.format("Nenhuma skill encontrada para o ID: %d", idSkill));
	}
}
