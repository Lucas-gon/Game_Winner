CREATE DATABASE IF NOT EXISTS game_winner;
use game_winner;
 
CREATE TABLE game_winner.usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL, -- Validação
    senha VARCHAR(100) NOT NULL, -- Validação
    data_cadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

select * from game_winner.usuarios;

CREATE TABLE game_winner.jogadores (
    id_jogador INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    posicao VARCHAR(50) NOT NULL,
    time_atual VARCHAR(50) NOT NULL,
    altura DECIMAL(3,2) NOT NULL, 
    game_winners_convertidos INT NOT NULL, -- Gráficos
    game_winners_perdidos INT NOT NULL, -- Gráficos
    frase_motivacional VARCHAR(255) NOT NULL
);

CREATE TABLE game_winner.tentativas (
    id_tentativa INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(255) NOT NULL, 
    resultado VARCHAR(30) NOT NULL CHECK (resultado IN('Acertou', 'Errou')), -- Gráfico interativo
    data_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_usuario INT,
		CONSTRAINT fk_usuario_tentativa FOREIGN KEY (fk_usuario)
			REFERENCES game_winner.usuarios(id_usuario)
);

select * from tentativas;

CREATE VIEW vw_dashboard_usuario AS
SELECT 
    fk_usuario,
    COUNT(id_tentativa) AS total_arremessos,
    SUM(CASE WHEN resultado = 'Acertou' THEN 1 ELSE 0 END) AS total_acertos,
    SUM(CASE WHEN resultado = 'Errou' THEN 1 ELSE 0 END) AS total_erros,
    CASE 
        WHEN COUNT(id_tentativa) > 0 
        THEN ROUND((SUM(CASE WHEN resultado = 'Acertou' THEN 1 ELSE 0 END) / COUNT(id_tentativa)) * 100, 0)
        ELSE 0 
    END AS fg_porcentagem
FROM game_winner.tentativas
GROUP BY fk_usuario;

SELECT resultado, DATE_FORMAT(data_registro, '%H:%i') as hora FROM tentativas WHERE fk_usuario = 1 ORDER BY id_tentativa DESC LIMIT 7;

    
    INSERT INTO game_winner.jogadores 
(nome, posicao, time_atual, altura, game_winners_convertidos, game_winners_perdidos, frase_motivacional) VALUES
('Stephen Curry', 'Armador', 'Warriors', 1.88, 10, 22, 'Seja a melhor versão de si mesmo em qualquer coisa que fizer.'),
('LeBron James', 'Ala', 'Lakers', 2.06, 28, 45, 'Eu amo o sucesso, mas são os obstáculos que realmente me moldam.'),
('Kevin Durant', 'Ala', 'Suns', 2.11, 14, 26, 'O trabalho duro vence o talento quando o talento não trabalha duro.'),
('Giannis Antetokounmpo', 'Ala-Pivô', 'Bucks', 2.11, 6, 15, 'Seja constante, continue trabalhando e coisas boas vão acontecer.'),
('Luka Doncic', 'Armador', 'Mavericks', 2.01, 9, 20, 'Eu apenas me divirto jogando basquete, sem pressão.'),
('Shai Gilgeous-Alexander', 'Armador', 'Thunder', 1.98, 7, 13, 'Confie no processo e no trabalho diário que você coloca no escuro.'),
('Victor Wembanyama', 'Pivô', 'Spurs', 2.24, 2, 8, 'Eu quero ser eu mesmo, criar minha própria história e não ser comparado.'),
('Kobe Bryant', 'Ala-Armador', 'Lakers', 1.98, 36, 52, 'Se você não acredita em si mesmo, ninguém mais vai acreditar.'),
('Anthony Edwards', 'Ala-Armador', 'Timberwolves', 1.93, 5, 14, 'Eu entro em quadra achando que ninguém pode me parar.'),
('Derrick Rose', 'Armador', 'Bulls', 1.91, 11, 18, 'Eu sempre soube que, se trabalhasse duro o suficiente, as coisas dariam certo.'),
('Jayson Tatum', 'Ala', 'Celtics', 2.03, 11, 24, 'Eu sempre acreditei que, se você trabalhar, os resultados virão.');

SELECT 
    id_jogador, 
    nome, 
    posicao, 
    time_atual, 
    altura, 
    game_winners_convertidos, 
    game_winners_perdidos, 
    frase_motivacional 
FROM game_winner.jogadores;