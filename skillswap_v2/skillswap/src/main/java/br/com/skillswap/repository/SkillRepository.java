package br.com.skillswap.repository;

import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import br.com.skillswap.modal.Skill;
import br.com.skillswap.modal.Usuario;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
	Optional<Skill> findByNome(String nome);
	
	@Query("SELECT s FROM Skill s LEFT JOIN UserSkill us ON s.id = us.skill.id AND us.usuario = :usuario WHERE us.skill.id IS NULL")
	Page<Skill> findByUsuarioNotBySkill(@Param("usuario") Usuario usuario, Pageable pageable);
	
//	@Query("FROM Skill s WHERE WHEN s.:filtros > valor")
//		List<Skill> findAll(@Param("filtro") String filtro, @Param("valor") Double valor);
	
//	List<Skill> findAllByFieldGreaterThan(String field, double value);
}
