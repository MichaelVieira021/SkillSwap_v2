package br.com.skillswap.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;

@Configuration
public class SwaggerConfig {
	
    @Bean
    public OpenAPI custmOpenAPI() {
        return new OpenAPI()
            .components(new Components()
            .addSecuritySchemes("bearerAuth", new SecurityScheme()
            .type(SecurityScheme.Type.HTTP)
            .scheme("bearer")
            .bearerFormat("JWT")
            )
        )
            .info(new Info()
                .title("SkillSwap")
                .version("1.0v")
                .description("")
                .contact(new Contact()
                .name("Michael Vieira")
                .email("michael21rj@gmail.com")
                )
            )
            .addSecurityItem(new SecurityRequirement().addList("bearerAuth"));
    }
};

////package br.com.skillswap.configs;
////
////public class configSwagger {
////
////}
//
//package br.com.skillswap.configs;
//
//import com.fasterxml.classmate.TypeResolver;
////import org.joda.time.LocalDate;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.ComponentScan;
//import org.springframework.http.HttpMethod;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.context.request.async.DeferredResult;
//import springfox.documentation.builders.PathSelectors;
//import springfox.documentation.builders.RequestHandlerSelectors;
//import springfox.documentation.builders.ResponseBuilder;
//import springfox.documentation.schema.ScalarType;
//import springfox.documentation.schema.WildcardType;
//import springfox.documentation.service.ApiKey;
//import springfox.documentation.service.AuthorizationScope;
//import springfox.documentation.service.ParameterType;
//import springfox.documentation.service.SecurityReference;
//import springfox.documentation.service.Tag;
//import springfox.documentation.spi.DocumentationType;
//import springfox.documentation.spi.service.contexts.SecurityContext;
//import springfox.documentation.spring.web.plugins.Docket;
//import springfox.documentation.swagger.web.DocExpansion;
//import springfox.documentation.swagger.web.ModelRendering;
//import springfox.documentation.swagger.web.OperationsSorter;
//import springfox.documentation.swagger.web.SecurityConfiguration;
//import springfox.documentation.swagger.web.SecurityConfigurationBuilder;
//import springfox.documentation.swagger.web.TagsSorter;
//import springfox.documentation.swagger.web.UiConfiguration;
//import springfox.documentation.swagger.web.UiConfigurationBuilder;
//import springfox.documentation.swagger2.annotations.EnableSwagger2;
//import springfox.petstore.controller.PetController;
//
//import java.util.List;
//
//import static java.util.Collections.*;
//import static springfox.documentation.schema.AlternateTypeRules.*;
//
//
//@SpringBootApplication
//@EnableSwagger2 
//@ComponentScan(basePackageClasses = {
//    PetController.class
//})
//public class Swagger2SpringBoot {
//
//  public static void main(String[] args) {
//    SpringApplication.run(Swagger2SpringBoot.class, args);
//  }
//
//
//  @Bean
//  public Docket petApi() {
//    return new Docket(DocumentationType.SWAGGER_2)
//        .select() 
//        .apis(RequestHandlerSelectors.any()) 
//        .paths(PathSelectors.any()) 
//        .build() 
//        .pathMapping("/") 
//        .directModelSubstitute(LocalDate.class, String.class) 
//        .genericModelSubstitutes(ResponseEntity.class)
//        .alternateTypeRules(
//            newRule(typeResolver.resolve(DeferredResult.class,
//                typeResolver.resolve(ResponseEntity.class, WildcardType.class)),
//                typeResolver.resolve(WildcardType.class))) 
//        .useDefaultResponseMessages(false) 
//        .globalResponses(HttpMethod.GET, 
//            singletonList(new ResponseBuilder()
//                .code("500")
//                .description("500 message")
//                .representation(MediaType.TEXT_XML)
//                .apply(r ->
//                    r.model(m ->
//                        m.referenceModel(ref ->
//                            ref.key(k ->
//                                k.qualifiedModelName(q ->
//                                    q.namespace("some:namespace")
//                                        .name("ERROR")))))) 
//                .build()))
//        .securitySchemes(singletonList(apiKey())) 
//        .securityContexts(singletonList(securityContext())) 
//        .enableUrlTemplating(true) 
//        .globalRequestParameters(
//            singletonList(new springfox.documentation.builders.RequestParameterBuilder()
//                .name("someGlobalParameter")
//                .description("Description of someGlobalParameter")
//                .in(ParameterType.QUERY)
//                .required(true)
//                .query(q -> q.model(m -> m.scalarModel(ScalarType.STRING)))
//                .build()))
//        .tags(new Tag("Pet Service", "All apis relating to pets")) 
//        .additionalModels(typeResolver.resolve(AdditionalModel.class)); 
//  }
//
//  @Autowired
//  private TypeResolver typeResolver;
//
//  private ApiKey apiKey() {
//    return new ApiKey("mykey", "api_key", "header"); 
//  }
//
//  private SecurityContext securityContext() {
//    return SecurityContext.builder()
//        .securityReferences(defaultAuth())
//        .forPaths(PathSelectors.regex("/anyPath.*")) 
//        .build();
//  }
//
//  List<SecurityReference> defaultAuth() {
//    AuthorizationScope authorizationScope
//        = new AuthorizationScope("global", "accessEverything");
//    AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
//    authorizationScopes[0] = authorizationScope;
//    return singletonList(
//        new SecurityReference("mykey", authorizationScopes)); 
//  }
//
//  @Bean
//  SecurityConfiguration security() {
//    return SecurityConfigurationBuilder.builder() 
//        .clientId("test-app-client-id")
//        .clientSecret("test-app-client-secret")
//        .realm("test-app-realm")
//        .appName("test-app")
//        .scopeSeparator(",")
//        .additionalQueryStringParams(null)
//        .useBasicAuthenticationWithAccessCodeGrant(false)
//        .enableCsrfSupport(false)
//        .build();
//  }
//
//  @Bean
//  UiConfiguration uiConfig() {
//    return UiConfigurationBuilder.builder() 
//        .deepLinking(true)
//        .displayOperationId(false)
//        .defaultModelsExpandDepth(1)
//        .defaultModelExpandDepth(1)
//        .defaultModelRendering(ModelRendering.EXAMPLE)
//        .displayRequestDuration(false)
//        .docExpansion(DocExpansion.NONE)
//        .filter(false)
//        .maxDisplayedTags(null)
//        .operationsSorter(OperationsSorter.ALPHA)
//        .showExtensions(false)
//        .showCommonExtensions(false)
//        .tagsSorter(TagsSorter.ALPHA)
//        .supportedSubmitMethods(UiConfiguration.Constants.DEFAULT_SUBMIT_METHODS)
//        .validatorUrl(null)
//        .build();
//  }
//
//}
