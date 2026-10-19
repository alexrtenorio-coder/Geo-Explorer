# Geo-Explorer
Geo-Explorer


# Geo-Explorer — Trilhas de Aprendizagem Interativas

## Sobre o projeto

O Geo-Explorer é uma aplicação web demonstrativa para explorar trilhas de
aprendizagem, consultar conteúdos, gerar desafios práticos e emitir certificados
demonstrativos.

O projeto propõe o uso de um agente de IA, como o IBM Bob, como apoio ao
desenvolvimento. As decisões, revisões, testes e validações permanecem sob
responsabilidade de quem desenvolve.

## Objetivos

- Organizar uma base fictícia de trilhas de aprendizagem.
- Disponibilizar pesquisa e filtros por tema e nível.
- Implementar comandos para consultar trilhas e conteúdos.
- Gerar desafios práticos associados às trilhas.
- Demonstrar a emissão de certificados de conclusão.
- Validar funcionalidades com testes básicos.
- Documentar a solução para publicação no GitHub.

## Funcionalidades

- Catálogo com seis trilhas fictícias.
- Pesquisa por título, tema e conteúdo.
- Filtros por nível e categoria.
- Consulta por comandos de texto.
- Geração de desafios.
- Certificados demonstrativos imprimíveis ou salváveis em PDF.
- Layout responsivo para computador e celular.
- Testes básicos executados no navegador.

## Comandos disponíveis

| Comando | Função |
|---|---|
| `ajuda` | Lista os comandos disponíveis |
| `listar trilhas` | Exibe o catálogo |
| `buscar dados` | Pesquisa uma trilha por termo |
| `conteudo python` | Mostra os conteúdos de uma trilha |
| `desafio ia` | Gera um desafio relacionado |
| `certificado` | Lista certificados da sessão atual |

Os termos podem ser alterados de acordo com o catálogo.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- GitHub Pages
- IBM Bob como ferramenta de apoio ao desenvolvimento, quando disponível

## Estrutura

```text
geo-explorer/
├── index.html
├── README.md
└── tests.js
```

## Como executar

1. Baixe ou clone o repositório.
2. Abra `index.html` em um navegador moderno.
3. Pesquise trilhas, use os filtros e experimente os comandos.
4. Abra uma trilha e consulte o desafio.
5. Marque a trilha como concluída para gerar um certificado demonstrativo.

A aplicação não precisa de servidor ou instalação de dependências para a
demonstração inicial.

## Como executar os testes

1. Abra `index.html` no navegador.
2. Pressione `F12` e selecione a aba Console.
3. Cole o conteúdo de `tests.js`.
4. Pressione Enter e confira os resultados apresentados.

## Limitações conhecidas

- Os dados são fictícios.
- O progresso e os certificados ficam apenas na memória da página; recarregar
  o site reinicia a sessão.
- Os certificados não são credenciais oficiais.
- Os comandos são interpretados por regras simples de JavaScript; não existe
  integração real com um modelo de IA neste protótipo.
- O projeto não possui login, banco de dados ou sincronização entre dispositivos.

## Publicação no GitHub Pages

1. Crie um repositório público chamado `geo-explorer`.
2. Envie `index.html`, `README.md` e `tests.js` para a raiz do repositório.
3. Acesse Settings → Pages.
4. Em Build and deployment, escolha Deploy from a branch.
5. Selecione a branch `main` e a pasta `/(root)`.
6. Salve e aguarde a publicação.

O endereço terá o formato:

`https://SEU-USUARIO.github.io/geo-explorer/`

Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub.

## Uso responsável da IA

Um agente de IA pode sugerir estruturas, código e testes, mas as sugestões
precisam ser revisadas e executadas. Registre no projeto o que foi gerado com
apoio da IA, o que foi alterado por você e quais testes foram realizados.

## Melhorias futuras

- Importação de trilhas por JSON ou CSV.
- Persistência do progresso.
- Testes automatizados em integração contínua.
- Geração de certificados em PDF com identificador verificável.
- Integração com um serviço de IA, mediante configuração segura.
- Métricas de progresso e recomendações de aprendizagem.
