import java.io.*;
import java.util.*;

public class Desastre {
    private String tipo;
    private List<Pergunta> perguntas;

    public Desastre(String tipo) {
        this.tipo = tipo;
        this.perguntas = new ArrayList<>();
    }

    public String getTipo() {
        return tipo;
    }

    public List<Pergunta> getPerguntas() {
        return perguntas;
    }

    public void adicionarPergunta(Pergunta pergunta) {
        perguntas.add(pergunta);
    }

    public void carregarPerguntasDeArquivo(String caminhoArquivo) {
        try (BufferedReader br = new BufferedReader(new FileReader(caminhoArquivo))) {
            String linha;
            while ((linha = br.readLine()) != null) {
                String[] partes = linha.split("\\|");
                if (partes.length == 3) {
                    String enunciado = partes[0];
                    String[] alternativas = partes[1].split(";");
                    int respostaCorreta = Integer.parseInt(partes[2]);
                    Pergunta pergunta = new Pergunta(enunciado, alternativas, respostaCorreta);
                    adicionarPergunta(pergunta);
                }
            }
        } catch (IOException e) {
            System.out.println("Erro ao carregar perguntas de " + caminhoArquivo);
        }
    }
}
