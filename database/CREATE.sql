CREATE TABLE Usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY ,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    pontuacao_total INT DEFAULT 0
);

CREATE TABLE Desastre (
    id_desastre INT AUTO_INCREMENT PRIMARY KEY ,
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE Pergunta (
    id_pergunta INT AUTO_INCREMENT PRIMARY KEY ,
    id_desastre INT NOT NULL,
    enunciado TEXT NOT NULL,
    alternativas TEXT NOT NULL,
    resposta_correta INT NOT NULL,
    FOREIGN KEY (id_desastre) REFERENCES Desastre(id_desastre)
);

CREATE TABLE Pontuacao (
    id_pontuacao INT AUTO_INCREMENT PRIMARY KEY ,
    id_usuario INT NOT NULL,
    id_desastre INT NOT NULL,
    pontuacao INT NOT NULL,
    data_jogo DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_desastre) REFERENCES Desastre(id_desastre)
);




