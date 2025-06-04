import java.util.ArrayList;
import java.util.List;

public class UsuarioService {
    private List<Usuario> usuarios = new ArrayList<>();

    public void cadastrarUsuario(Usuario u) {
        usuarios.add(u);
    }

    public List<Usuario> listarUsuarios() {
        return usuarios;
    }

    public Usuario buscarPorNome(String nome) {
        for (Usuario u : usuarios) {
            if (u.getNome().equalsIgnoreCase(nome)) return u;
        }
        return null;
    }

    public boolean atualizarUsuario(String nome, String novoNome, int novaIdade) {
        Usuario u = buscarPorNome(nome);
        if (u != null) {
            u.setNome(novoNome);
            u.setIdade(novaIdade);
            return true;
        }
        return false;
    }

    public boolean excluirUsuario(String nome) {
        Usuario u = buscarPorNome(nome);
        if (u != null) {
            usuarios.remove(u);
            return true;
        }
        return false;
    }
}
