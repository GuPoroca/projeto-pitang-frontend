
<p align="center"><strong>Frontend Programa de Estágio Pitang 2024.</strong></p>

<p align="center">
  <a href="#get-started"><strong>Get Started</strong></a> ·
  <a href="#decisões"><strong>Decisões</strong></a> ·
  <a href="#deployment"><strong>Considerações</strong></a>
</p>

<br/>

## Get Started

Para rodar, primeiro, abra o terminal na pasta do projeto e,

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
um projeto mais organizado e limpo. Essas foram:
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

Para dar parse nos componentes estilizados das bibliotecas ao mockar os testes.

Eu não utilizei um .env para o frontend por problemas com o jest, tentei fazer funcionar bastante mas ele reclamava do import do env, e
não consegui mockar, creio que em um projeto real teria que resolver esse problema para não expor a url ou senha do backend.

## Considerações

Gostaria de primeiramente agradecer a oportunidade de aprender e me desenvolver com vocês, e torço para que
essa experiência seja apenas o começo de uma grande jornada pela frente.

Dificuldades:

O projeto do frontend foi bem mais complicado do que o back, as telas e como componentizar para ficar bom foi uma
tarefa dificil. Uma dificuldade ainda maior foram os testes já que a configuração do jest com o .env do vite, ou
com o SWC me deu muita dor de cabeça, porém acredito que consegui fazer um bom trabalho com a experiência que tinha.
decidir no design mais simples foi fácil, e os requisitos foram bem diretos quanto ao projeto, a maior parte do front
foi construir os blocos e montar as páginas.

- GitFlow: 

Tomei a liberdade nesse projeto já que era individual e não estava em produção para usar a branch master como
se fosse a develop. Acredito que as boas práticas do gitflow tenham sido um ponto fraco do meu projeto, já que
estava um pouco desacostumado, dando nomes bem ruins a branches e a commits. No mais aprendi muito sobre e vou
continuar estudando e aprimorando esse ponto fraco que encontrei em mim.