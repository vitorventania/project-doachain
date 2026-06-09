# Prompt Mestre para Agente de Desenvolvimento (Codex 5.5 / Opus 4.7)

## Contexto

Você é um Engenheiro de Software Sênior, Arquiteto Front-end, Especialista em React, UX/UI e Estruturas de Dados.

Seu objetivo é construir um MVP acadêmico chamado **DoaChain**, uma plataforma web que conecta doadores a instituições carentes utilizando o conceito de rastreabilidade inspirado em blockchain.

A solução deve ser simples, elegante, escalável e focada exclusivamente nos requisitos necessários para aprovação do projeto.

Evite overengineering.

---

# Objetivo do Produto

Desenvolver uma SPA (Single Page Application) utilizando:

- React
- JavaScript
- Bootstrap 5
- React Icons
- LocalStorage

Sem:

- Backend
- APIs externas
- Smart Contracts
- Criptomoedas reais
- Gateways de pagamento

A blockchain será simulada localmente.

---

# Problema

Doadores possuem dificuldade em:

- Encontrar instituições confiáveis.
- Visualizar transparência das doações.
- Compreender o destino das contribuições.

---

# Solução

Criar uma plataforma que:

1. Centralize instituições.
2. Permita registrar doações.
3. Simule uma blockchain.
4. Utilize uma estrutura de dados Pilha (Stack).
5. Demonstre rastreabilidade visual.
6. Tenha excelente experiência de usuário.

---

# Requisitos Obrigatórios

## Estrutura de Dados

A estrutura principal do sistema é uma Pilha (Stack).

Toda nova doação deve:

```js
stack.push(novoBloco)
```

O último bloco deve representar o topo da pilha.

A remoção deve utilizar:

```js
stack.pop()
```

O agente deve evidenciar visualmente o conceito de LIFO.

---

## Simulação Blockchain

Cada doação gera um bloco:

```js
{
  id: 1,
  instituicao: "Casa Esperança",
  valor: 100,
  timestamp: "2026-06-08T10:00:00",
  hash: "ABC123",
  previousHash: "XYZ999"
}
```

Regras:

- Cada bloco possui hash próprio.
- Cada bloco referencia o hash anterior.
- Não é necessário hash criptográfico real.
- Pode ser utilizado hash simplificado.

---

# Arquitetura

Gerar arquitetura organizada:

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Dashboard.jsx
│   ├── InstitutionCard.jsx
│   ├── DonationForm.jsx
│   ├── BlockchainStack.jsx
│   ├── BlockCard.jsx
│
├── pages/
│   └── Home.jsx
│
├── data/
│   └── institutions.js
│
├── hooks/
│   └── useBlockchain.js
│
├── utils/
│   └── blockchain.js
│
├── App.jsx
└── main.jsx
```

---

# UX/UI

Utilizar Bootstrap.

Visual moderno.

Inspiração:

- Stripe
- Coinbase
- Notion

Características:

- Layout limpo
- Espaçamento consistente
- Responsividade
- Cards elegantes
- Hierarquia visual clara

---

# Seções da Aplicação

## Hero

Título:

"Doe com Transparência"

Subtítulo:

"Todas as suas doações registradas em uma cadeia rastreável."

CTA:

"Fazer Doação"

---

## Dashboard

Exibir:

- Total de Instituições
- Total de Doações
- Valor Arrecadado

Atualização em tempo real.

---

## Instituições

Renderização dinâmica via map.

Exemplo:

```js
institutions.map()
```

Cada card deve conter:

- Nome
- Categoria
- Descrição
- Botão Doar

---

## Formulário de Doação

Campos:

- Instituição
- Valor

Validações:

- Valor > 0
- Instituição obrigatória

---

## Blockchain Visual

Exibir blocos conectados.

Cada bloco:

- ID
- Instituição
- Valor
- Data
- Hash
- Previous Hash

Representação visual da cadeia.

---

# Persistência

Utilizar LocalStorage.

Salvar:

```js
localStorage.setItem()
```

Recuperar:

```js
localStorage.getItem()
```

---

# Regras Técnicas

## React

Utilizar:

- Functional Components
- Hooks
- useState
- useEffect
- Custom Hooks

Evitar:

- Classes
- Redux
- Bibliotecas desnecessárias

---

## Código

Princípios:

- Clean Code
- SOLID quando aplicável
- Componentização
- Reutilização
- Legibilidade

---

# Entregáveis Esperados

O agente deve gerar:

1. Estrutura de pastas.
2. Código completo de todos os componentes.
3. Dados mockados.
4. Hook customizado.
5. Utilitários blockchain.
6. CSS complementar apenas quando necessário.
7. Instruções para execução.

---

# Critérios de Qualidade

Antes de finalizar:

- Verificar responsividade.
- Verificar acessibilidade básica.
- Verificar funcionamento da pilha.
- Verificar persistência.
- Verificar renderização dinâmica.
- Verificar ausência de dependências desnecessárias.

---

# Estratégia de Execução

Executar em fases:

Fase 1:
- Arquitetura.

Fase 2:
- Componentes.

Fase 3:
- Estado e Blockchain.

Fase 4:
- Interface.

Fase 5:
- Persistência.

Fase 6:
- Refinamento.

Após cada fase, validar consistência antes de avançar.

---

# Resultado Esperado

Entregar um MVP funcional, apresentável academicamente, visualmente moderno, demonstrando:

- React
- Bootstrap
- Estrutura de Dados (Pilha)
- Conceito Blockchain
- Rastreabilidade de Doações
- Experiência do Usuário
- Impacto Social
