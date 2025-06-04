# 🌍 Prevenção Gamificada de Desastres Naturais

**Prevenir é a melhor maneira de sobreviver.**

Este projeto foi desenvolvido como parte do **Desafio FIAP: Eventos Extremos**. Ele consiste em uma plataforma **educacional gamificada**, com o objetivo de conscientizar a população sobre como se preparar e agir durante desastres naturais. Através de quizzes interativos com pontuação e ranking, os usuários aprendem de forma divertida e acessível.

## 📚 Objetivo Acadêmico

Este protótipo simula uma solução digital que contribui para a prevenção e educação em situações de risco ambiental, utilizando React para o front-end e dados simulados (mock) no lugar do back-end.

---

## 🚀 Funcionalidades

- 🧠 Quizzes sobre desastres naturais: enchentes, terremotos, furacões e incêndios
- 📊 Ranking de usuários com base na pontuação total
- 📝 Feedback com explicações educativas em cada pergunta
- 💻 Interface responsiva e com bom design visual
- 🔁 Navegação entre pelo menos 3 páginas (Home, Quiz, Ranking)

---

## 🧱 Tecnologias Utilizadas

- **React.js** 
- **JavaScript / TypeScript**
- **CSS / Tailwind **
- **Mock de dados em arquivos `.ts` / `.js`**

---

## 🧪 Dados Simulados

### 🌪️ Desastres (`disasters`)

Lista de desastres naturais com perguntas de múltipla escolha:

```ts
{
  id: number;
  type: string;
  description: string;
  questions: {
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  }[];
}
```

### 👥 Usuários (mockUsers)
Mock de usuários fictícios com pontuação:
```ts
{
  name: string;
  age: number;
  totalScore: number;
}
```

### 🧑‍🎓 Autoria
Projeto acadêmico desenvolvido por:

Eduardo Jaskowiak Fronza 

João Pedro Grahl Trein

Curso: Engenharia de Software - 3º semestre
Instituição: FIAP - Faculdade de Informática e Administração Paulista


### 📜 Licença
Este projeto é de uso exclusivamente educacional, sem fins comerciais.
