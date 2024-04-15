package br.com.skillswap.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.skillswap.modal.Usuario;


@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	Optional<Usuario> findByLogin(String login);
}
