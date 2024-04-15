package br.com.skillswap.modal.exceptions;

public class ResourceConflict extends RuntimeException{

    private static final long serialVersionUID = 1L;

    public ResourceConflict(String mensagem){
        super(mensagem);
    }
    
}
