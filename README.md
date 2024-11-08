# Aplicação Rick and Morty

Este projeto foi desenvolvido para testar minhas habilidades com uma stack tecnológica que inclui Laravel, SQLite e ReactJS. A aplicação consome dados da API pública de Rick and Morty, permitindo navegar e explorar informações de personagens. Funcionalidades implementadas:

## Tecnologias utilizadas

-   Laravel
-   SQLite
-   ReactJS
-   Bootstrap

## Páginas da aplicação

**HOME**

A Home exibe uma listagem dos personagens vindos da [API](https://rickandmortyapi.com/) e com paginação. Os personagens são dispostos como cards com uma imagem, nome e um botão que leva para a página de detalhes do mesmo:

![HOME](./blockframe-home.png)

**PERSONAGENS**

Tela similar a "Home", a única diferença além das cores é que as informações dos personagens vem do banco de dados local, ou seja, dos personagens salvos pelos usuários:

![PERSONAGENS](./blockframe-personagens.png)

**DETALHES DO PERSONAGEM**

***OBS: As ações de Salvar, Atualizar e Deletar são permitidas apenas a usuário logados atráves dos tokens gerados que são utilizados para controle de requisições.***

Caso o usuário tenha vindo da página "Home", lhe é permitido "Salvar" as seguintes informações do personagem:

    { name, species, gender, location, image, url }

Além de permitir navegar até o "Link" original da API para consultar as informações listadas.

![Detalhe do Personagem](./blockframe-detalhes-personagem.png)

Ao clicar em salvar as seguintes informações serão armazenadas no banco de dados local:

    { name, species, image, url, created_at, updated_at }

Caso o usuário tenha vindo da página "Personagens", lhe é permitido "Editar" e "Deletar", e portanto, é possível editar as seguintes informações:

    { name, species }

![Detalhe do Personagem](./blockframe-editar-personagem.png)

**LOGIN / CADASTRO**

Páginas de cadastro e login, onde as seguintes informações do usuário são salvas no banco de dados local:

    { name, email, password }

### Tela de login

![LOGIN](./blockframe-login.png)

### Tela de cadastro

![LOGIN](./blockframe-cadastro.png)

**SOBRE**

Mini currículo com links para minhas redes sociais, um breve resumo, habilidades, e a melhor parte, projetos que desenvolvi:

![SOBRE](./blockframe-sobre.png)

## Rodando o projeto

Consulte o ![HELP.md](./HELP.md) para as instruções de como rodar o projeto em sua máquina local.

## GitHub
[![Top Langs](https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=sergiotavuencas)](https://github.com/anuraghazra/github-readme-stats)
![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=sergiotavuencas\&hide=issues\&show_icons=true)

## Contact
Sinta-se à vontade para entrar em contato comigo através de minhas redes sociais se tiver dúvidas sobre minha carreira, projetos em que estou trabalhando, o que estou estudando ou qualquer conselho que você possa ter, seja relacionado à carreira ou sugestões de melhorias em meu código .

<div>
  <a href="http://www.linkedin.com/in/sergiotavuencas" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  <a href="https://github.com/sergiotavuencas/" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>
  <a href="mailto:sergio_tavuencas@outlook.com"><img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" target="_blank"></a>
  <a href="mailto:sergiovicentetavuencas@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>