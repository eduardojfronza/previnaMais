import java.util.ArrayList;
import java.util.List;

public class Ranking {
    private List<Usuario> usuarios;

    public Ranking() {
        this.usuarios = new ArrayList<>();
    }

    public void adicionarUsuario(Usuario usuario) {
        usuarios.add(usuario);
    }

    public void exibirRanking() {
        usuarios.sort((u1, u2) -> u2.getPontuacaoTotal() - u1.getPontuacaoTotal());

        System.out.println("\n🏆 Ranking de Sobreviventes:");
        for (int i = 0; i < usuarios.size(); i++) {
            Usuario u = usuarios.get(i);
            System.out.printf("%dº - %s: %d pontos\n", i + 1, u.getNome(), u.getPontuacaoTotal());
        }
    }
}
