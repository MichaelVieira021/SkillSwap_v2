package br.com.skillswap.modal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user_skills")
public class UserSkill {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private Usuario usuario;
	
	@ManyToOne
	@JoinColumn(name = "skill_id", nullable = false)
	private Skill skill;
	
	@Column(nullable = false)
	private Long level;

	public UserSkill(Long id, Usuario usuario, Skill skill, Long level) {
		this.id = id;
		this.usuario = usuario;
		this.skill = skill;
		this.level = level;
	}
	
	public UserSkill() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Skill getSkill() {
		return skill;
	}

	public void setSkill(Skill skill) {
		this.skill = skill;
	}

	public Long getLevel() {
		return level;
	}

	public void setLevel(Long level) {
		this.level = level;
	}
}
