public class Usuario {
    private String nome;
    private int idade;
    private int pontuacaoTotal;

    public Usuario(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
        this.pontuacaoTotal = 0;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public int getPontuacaoTotal() {
        return pontuacaoTotal;
    }

    public void setPontuacaoTotal(int pontuacaoTotal) {
        this.pontuacaoTotal = pontuacaoTotal;
    }
}
