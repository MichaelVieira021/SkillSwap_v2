package br.com.skillswap.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.skillswap.dto.userSkill.ResumoUserSkillResponseDTO;
import br.com.skillswap.modal.Skill;
import br.com.skillswap.modal.UserSkill;
import br.com.skillswap.modal.Usuario;

@Repository
public interface UserSkillRepository extends JpaRepository<UserSkill, Long> {
	
	Page<UserSkill> findByUsuario(Usuario usuario, Pageable pageable);
	
//	@Query("SELECT s FROM Skill s WHERE s NOT IN (SELECT us.skill FROM UserSkill us WHERE us.usuario = :usuario)")
//	List<Skill> findByUsuarioNotBySkill(@Param("usuario") Usuario usuario, Pageable pageable);
	
//	@Query("from UserSkill us where us.level :operacao :level and us.usuario = :usuario")
//	Page<UserSkill> findLevelByUsuario(
//			@Param("usuario") Usuario usuario,
//			@Param("level") Long level,
//			@Param("operacao") String operacao,
//			Pageable pageable);
	
	@Query("from UserSkill us where us.level = :level and us.usuario = :usuario")
	Page<UserSkill> findLevelByUsuarioIgualA(
			@Param("usuario") Usuario usuario,
			@Param("level") Long level,
			Pageable pageable);
	
	@Query("from UserSkill us where us.level > :level and us.usuario = :usuario")
	Page<UserSkill> findLevelByUsuarioMaiorQue(
			@Param("usuario") Usuario usuario,
			@Param("level") Long level,
			Pageable pageable);
	
	@Query("from UserSkill us where us.level < :level and us.usuario = :usuario")
	Page<UserSkill> findLevelByUsuarioMenorQue(
			@Param("usuario") Usuario usuario,
			@Param("level") Long level,
			Pageable pageable);
	
//	@Query("from Skill s left join UserSkill us ON s.id = us.skill_id AND us.user_id = :usuario")
//    @Query("SELECT s FROM Skill s WHERE s NOT IN (SELECT us.skill FROM UserSkill us WHERE us.usuario = :usuario)")
//	List<UserSkill> findByUsuarioNotBySkill(Usuario usuario);

	
	Optional<UserSkill> findByUsuarioAndSkill(Usuario usuario, Skill skill); 
	
	List<Skill> findBySkill(Usuario usuario);
	
    @Modifying
    @Query(value = "DELETE FROM user_skills WHERE skill_id = :skillId", nativeQuery = true)
    void deleteBySkillId(@Param("skillId") Long skillId);
}
