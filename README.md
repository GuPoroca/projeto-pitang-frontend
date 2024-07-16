
<p align="center"><strong>Frontend Programa de Estágio Pitang 2024.</strong></p>

<p align="center">
  <a href="#get-started"><strong>Get Started</strong></a> ·
  <a href="#decisões"><strong>Decisões</strong></a> ·
  <a href="#deployment"><strong>Considerações</strong></a>
</p>

<br/>

## Get Started

Para rodar, primeiro, crie um .env com as variáveis que preferir,
no .env.example tem as variáveis necessárias e quais eu usei para rodar o projeto.
abra o terminal na pasta do projeto e,
Instale as dependências:

```shell
npm install
```

Execute em modo desenvolvedor:

```shell
npm run dev
```

> _Note_: Para o funcionamento do site com todas as features, é necessário rodar o <a href="https://github.com/GuPoroca/projeto-pitang-backend" target="_blank"> Backend </a> ao mesmo tempo.

## Decisões

Nesse projeto me utilizei de algumas bibliotecas para facilitar o desenvolvimento de UI's, para entregar
um projeto mais organizado e limpo. Essas foram
- Chakra-UI para fazer o form. (recomendação de Keven)
- PrimeReact para fazer a tabela de agendamento.

Utilizei também o react-datepicker pedido, além de outras como o react-hook-form que era requisito.

Para validação de dados, usei o Zod como recomendado e ensinado nas aulas.

Para os testes, tive que fazer bastante configuração, decidi usar o SWC no lugar do Babel, então precisei do: 
- @swc/jest
além disso, utilizei os
- @happy-dom/jest-environment
- happy-dom
- identity-obj-proxy

para dar parse nos componentes estilizados das bibliotecas ao mockar os testes.

## Considerações

Gostaria de primeiramente agradecer a oportunidade de aprender e me desenvolver com vocês, e torço para que
essa experiência seja apenas o começo de uma grande jornada pela frente.