public class Pergunta {
    private String enunciado;
    private String[] alternativas;
    private int respostaCorreta; // índice da alternativa correta

    public Pergunta(String enunciado, String[] alternativas, int respostaCorreta) {
        this.enunciado = enunciado;
        this.alternativas = alternativas;
        this.respostaCorreta = respostaCorreta;
    }


    public boolean verificarResposta(int respostaUsuario) {
        return respostaUsuario == respostaCorreta;
    }

    public String getEnunciado() {
        return enunciado;
    }

    public void setEnunciado(String enunciado) {
        this.enunciado = enunciado;
    }

    public String[] getAlternativas() {
        return alternativas;
    }

    public void setAlternativas(String[] alternativas) {
        this.alternativas = alternativas;
    }

    public int getRespostaCorreta() {
        return respostaCorreta;
    }

    public void setRespostaCorreta(int respostaCorreta) {
        this.respostaCorreta = respostaCorreta;
    }
}
