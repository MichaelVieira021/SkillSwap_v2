package br.com.skillswap.modal;

import java.util.Collection;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import br.com.skillswap.common.ConversorData;

@Entity
@Table(name = "usuario")
public class Usuario implements UserDetails{
    
	private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUsuario")
    private Long id;

    @Column(nullable = false, unique = true, length = 15)
    private String login;

    @Column(nullable = false)
    private String senha;

    @Column(nullable = false)
    private String dtCadastro;
    
    @OneToMany(mappedBy = "usuario")
    private List<UserSkill> userSkills;
    
    public Usuario() {
    	this.dtCadastro = ConversorData.converterDateParaDataHora(new Date());
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getDtCadastro() {
        return dtCadastro;
    }

    public void setDtCadastro(String dtCadastro) {
        this.dtCadastro = dtCadastro;
    }
    
	public List<UserSkill> getUserSkills() {
		return userSkills;
	}
	
	public void setUserSkills(List<UserSkill> userSkills) {
		this.userSkills = userSkills;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
    public String getPassword() {
        return senha;
    }

    @Override
    public String getUsername() {
       return login;
    }

    @Override
    public boolean isAccountNonExpired() {
       return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
       return true;
    }
}
