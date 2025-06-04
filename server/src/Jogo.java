import java.util.Scanner;

public class Jogo {
    private Usuario usuario;
    private Desastre desastre;
    private int pontuacao;

    public Jogo(Usuario usuario, Desastre desastre) {
        this.usuario = usuario;
        this.desastre = desastre;
        this.pontuacao = 0;
    }

    public void iniciarJogo(Scanner scanner) {
        System.out.println("Iniciando simulação: " + desastre.getTipo());

        for (Pergunta pergunta : desastre.getPerguntas()) {
            System.out.println(pergunta.getEnunciado());
            String[] alternativas = pergunta.getAlternativas();
            for (int i = 0; i < alternativas.length; i++) {
                System.out.println((i + 1) + ". " + alternativas[i]);
            }

            System.out.print("Sua resposta: ");
            int resposta = scanner.nextInt() - 1;

            if (pergunta.verificarResposta(resposta)) {
                System.out.println("✅ Correto!\n");
                pontuacao += 10;
            } else {
                System.out.println("❌ Errado.\n");
            }
        }

        System.out.println("Pontuação final: " + pontuacao + " pontos.");
        usuario.setPontuacaoTotal(usuario.getPontuacaoTotal() + pontuacao);
    }
}
