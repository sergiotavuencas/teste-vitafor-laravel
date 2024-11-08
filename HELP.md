## Sobre o Projeto

Este projeto é uma aplicação desenvolvida com Laravel para o backend e React.js para o frontend. As instruções abaixo vão orientá-lo na configuração, instalação das dependências, migração do banco de dados e execução do projeto.

## Pré-requisitos

- PHP >= 8.0
- Composer >= 2.0
- Node.js >= 14.0 e npm (ou Yarn como alternativa)
- Git para controle de versão
- Docker caso queira utilizar contêineres

***OBS: Rodar com o Docker, faz com que as requisições sejam mais lentas, então será necessário um pouco de paciência.***

## Passos

### 1. Clonar o Repositório
```
git clone https://github.com/sergiotavuencas/teste-vitafor-laravel.git
cd teste-vitafor-laravel
```

Para os próximos passos recomendo que utilze dois terminais, um para rodar o back-end, e outro para rodar o front-end. Os comandos iniciam na raiz do projeto, então sempre execute a partir do mesmo.

### 2. Rodando o back-end

**COM DOCKER**
```
docker compose up -d
```

***OBS: Caso queira rodar a aplicação em outra porta, no arquivo "compose.yml", altere o valor "8000" em "ports" para a rota que desejar, mas será necessário alterar a configuração do front-end também, então antes de executar o terceiro passo, pule para a seção [Problema](#problema-com-a-rota-do-laravel)***

**SEM DOCKER**
```
cd back-end
composer install
php artisan migrate
php artisan serve
```

***OBS: Certifique-se que o laravel esteja rodando na rota "http://127.0.0.1:8000", caso não esteja, pule o terceiro passo por enquanto que o último passo irá lhe ajudar.***

### 3. Rodando o front-end
```
cd front-end
npm install
npm run dev
```

***OBS: Cerifique-se de que o react esteja roando na rota "http://localhost:5173/", caso não esteja, basta acessar o link fornecido no terminal.***

### Problema com a rota do Laravel
Caso o laravel tenha iniciado em uma rota diferente da *"http://127.0.0.1:8000"*, é necessário alterar a rota configurada no front-end, para isso busque o arquivo **vite.config.js**, e altere o valor de **target** para a rota na qual o laravel foi iniciado. Com isso já deve estar tudo certo para rodar a aplicação.

***OBS: Caso ainda tenha problema, sinta-se livre para me contatar que irei ajudar o mais rápido possível.***
