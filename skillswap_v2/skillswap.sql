-- Criar Database
CREATE DATABASE skillswap;

-- Criação de Sequence
CREATE SEQUENCE skill_id_seq;
CREATE SEQUENCE user_skill_id_seq;
CREATE SEQUENCE usuario_id_seq;


-- Tabela Usuario
CREATE TABLE usuario (
    id BIGINT DEFAULT nextval('usuario_id_seq') PRIMARY KEY,
    login VARCHAR(15) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    dt_cadastro VARCHAR(255) NOT NULL
);

-- Tabela Skill
CREATE TABLE skill (
    id BIGINT DEFAULT nextval('skill_id_seq') PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE,
    tecAmp INT NOT NULL,
    atkAdicional INT NOT NULL,
    duracao DOUBLE PRECISION NOT NULL,
    resfriamento DOUBLE PRECISION NOT NULL,
    foto VARCHAR(255) NOT NULL
);

-- Tabela UserSkill
CREATE TABLE user_skill (
    id BIGINT DEFAULT nextval('user_skill_id_seq') PRIMARY KEY,
    user_id BIGINT REFERENCES usuario(id) ON DELETE CASCADE,
    skill_id BIGINT REFERENCES skill(id) ON DELETE CASCADE,
    level BIGINT NOT NULL
);
