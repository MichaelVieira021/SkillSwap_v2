package br.com.skillswap.modal.exceptions;

public class UsuarioNaoEncontradoException extends EntidadeNaoEncontradaException{

	private static final long serialVersionUID = 1L;

	public UsuarioNaoEncontradoException(String message) {
		super(message);
	}

	public UsuarioNaoEncontradoException(Long idSkill) {
		super(String.format("Nenhum usuario encontrada para o ID: %d", idSkill));
	}
}
