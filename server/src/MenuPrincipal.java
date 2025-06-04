import java.util.*;

public class MenuPrincipal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        UsuarioService usuarioService = new UsuarioService();
        Ranking ranking = new Ranking();
        List<Desastre> desastres = new ArrayList<>();

        // Criar desastres com base em arquivos
        Desastre enchente = new Desastre("Enchente");
        enchente.carregarPerguntasDeArquivo("previna-/server/src/perguntas/enchente.txt");

        Desastre terremoto = new Desastre("Terremoto");
        terremoto.carregarPerguntasDeArquivo("previna-/server/src/perguntas/terremoto.txt");

        desastres.add(enchente);
        desastres.add(terremoto);

        int opcao;

        do {
            System.out.println("\n=== Menu Principal ===");
            System.out.println("1. Cadastrar usuário");
            System.out.println("2. Listar usuários");
            System.out.println("3. Buscar usuário");
            System.out.println("4. Atualizar usuário");
            System.out.println("5. Remover usuário");
            System.out.println("6. Iniciar jogo");
            System.out.println("7. Sair");
            System.out.print("Escolha uma opção: ");
            opcao = scanner.nextInt();
            scanner.nextLine();

            switch (opcao) {
                case 1:
                    System.out.print("Nome: ");
                    String nome = scanner.nextLine();

                    System.out.print("Idade: ");
                    int idade = scanner.nextInt();
                    scanner.nextLine();

                    Usuario novoUsuario = new Usuario(nome, idade);
                    usuarioService.cadastrarUsuario(novoUsuario);

                    System.out.println("Usuário cadastrado com sucesso!");
                    break;

                case 2:
                    List<Usuario> usuarios = usuarioService.listarUsuarios();

                    if (usuarios.isEmpty()) {
                        System.out.println("Nenhum usuário cadastrado.");
                    } else {
                        System.out.println("Usuários cadastrados:");
                        for (Usuario u: usuarios) {
                            System.out.println("- " + u.getNome() + " (Idade: " + u.getIdade() + ")");
                        }
                    }
                    break;

                case 3:
                    System.out.print("Digite o nome do usuário a buscar: ");
                    String busca = scanner.nextLine();

                    Usuario encontrado = usuarioService.buscarPorNome(busca);

                    if (encontrado != null) {
                        System.out.println("Usuário encontrado: " + encontrado.getNome() + ", Idade: " + encontrado.getIdade());
                    } else {
                        System.out.println("Usuário não encontrado.");
                    }
                    break;

                case 4:
                    System.out.print("Digite o nome do usuário a atualizar: ");
                    String nomeAtualizar = scanner.nextLine();

                    System.out.print("Novo nome: ");
                    String novoNome = scanner.nextLine();

                    System.out.print("Nova idade: ");
                    int novaIdade = scanner.nextInt();
                    scanner.nextLine();

                    boolean atualizado = usuarioService.atualizarUsuario(nomeAtualizar, novoNome, novaIdade);

                    if (atualizado) {
                        System.out.println("Usuário atualizado com sucesso.");
                    } else {
                        System.out.println("Usuário não encontrado.");
                    }
                    break;

                case 5:
                    System.out.print("Digite o nome do usuário a remover: ");
                    String nomeRemover = scanner.nextLine();

                    boolean removido = usuarioService.excluirUsuario(nomeRemover);

                    if (removido) {
                        System.out.println("Usuário removido com sucesso.");
                    } else {
                        System.out.println("Usuário não encontrado.");
                    }
                    break;

                case 6:
                    System.out.print("Digite o nome do jogador: ");
                    String nomeJogador = scanner.nextLine();

                    Usuario jogador = usuarioService.buscarPorNome(nomeJogador);

                    if (jogador == null) {
                        System.out.println("Usuário não encontrado. Cadastre primeiro.");
                        break;
                    }

                    System.out.println("Escolha um desastre para jogar:");
                    for (int i = 0; i < desastres.size(); i++) {
                        System.out.println((i + 1) + ". " + desastres.get(i).getTipo());
                    }

                    int escolha = scanner.nextInt();
                    scanner.nextLine();

                    if (escolha < 1 || escolha > desastres.size()) {
                        System.out.println("Opção inválida. Voltando ao menu.");
                        break;
                    }

                    Desastre escolhido = desastres.get(escolha - 1);

                    Jogo jogo = new Jogo(jogador, escolhido);
                    jogo.iniciarJogo(scanner);

                    ranking.adicionarUsuario(jogador);
                    ranking.exibirRanking();

                    break;

                case 7:
                    System.out.println("Encerrando programa. Obrigado!");
                    break;

                default:
                    System.out.println("Opção inválida.");
            }

        } while (opcao != 7);

        scanner.close();
    }
}
