-- Inserindo usuários
INSERT INTO Usuario (nome, idade) VALUES ('Eduardo', 20);
INSERT INTO Usuario (nome, idade) VALUES ('Ana', 22);

-- Inserindo desastres
INSERT INTO Desastre (tipo) VALUES ('Enchente');
INSERT INTO Desastre (tipo) VALUES ('Terremoto');

-- Inserindo perguntas
INSERT INTO Pergunta (id_desastre, enunciado, alternativas, resposta_correta)
VALUES 
(1, 'O que fazer ao perceber sinais de enchente?', 'A) Correr para o rio|B) Subir para lugar alto|C) Ficar em casa', 2),
(1, 'Qual item é essencial em um kit de emergência?', 'A) Lanterna|B) Bola de futebol|C) Geladeira', 1),
(2, 'O que você deve fazer durante um terremoto?', 'A) Correr para fora|B) Se proteger debaixo de móveis|C) Usar elevador', 2);

UPDATE Usuario SET pontuacao_total = 150 WHERE nome = 'Eduardo';

INSERT INTO Pontuacao (id_usuario, id_desastre, pontuacao)
VALUES (1, 1, 80),
       (1, 2, 70);
