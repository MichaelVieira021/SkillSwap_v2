package br.com.skillswap.security;

import java.util.Date;
import java.util.Optional;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import br.com.skillswap.modal.Usuario;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JWTService {
    
    private static final String SECURITY_KEY = "2024Chav3Skill$Swap,Nek!";

    public String gerarToken(Authentication authentication){

        int tempoExpiracao = 86400000;
        Date dataExpiracao = new Date(new Date().getTime() + tempoExpiracao);
        Usuario usuario = (Usuario) authentication.getPrincipal();
        return Jwts.builder()
                .setSubject(usuario.getId().toString())
                .setIssuedAt(new Date())
                .setExpiration(dataExpiracao)
                .signWith(SignatureAlgorithm.HS256, SECURITY_KEY)
                .compact();
    }
    
    public boolean validarToken(String token) {
        try {
            Claims claims = Jwts.parser().setSigningKey(SECURITY_KEY).parseClaimsJws(token).getBody();
            return true;
        } catch (ExpiredJwtException e) {
            System.out.println("Token expirado: " + e.getMessage());
            return false;
        } catch (JwtException e) {
            System.out.println("Falha na validação do token: " + e.getMessage());
            return false;
        }
    }

    public Optional<Long> obterIdDoUsuario(String token){
        try {
        	Claims claims = Jwts.parser().setSigningKey(SECURITY_KEY).parseClaimsJws(token).getBody();  
        	return Optional.ofNullable(Long.parseLong(claims.getSubject()));

        }catch (Exception e) {
        	return Optional.empty();
        }
    }

}
