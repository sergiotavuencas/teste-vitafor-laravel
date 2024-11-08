import "./About.css";

export default function About() {
  const renderHeader = () => (
    <div className="row text-center">
      <h1 className="about-name">Sérgio Vicente Tavuencas</h1>
      <h2 className="about-position">Desenvolvedor de Software</h2>
    </div>
  );

  const renderContact = () => (
    <div className="row py-4 text-center">
      <div className="col col-lg-3">
        <a href="https://www.linkedin.com/in/sergiotavuencas/" target="_blank">
          LinkedIn
        </a>
      </div>
      <div className="col col-lg-3">
        <a href="https://wa.me/5515996502116" target="_blank">
          (15) 99650-2116
        </a>
      </div>
      <div className="col col-lg-3">
        <a href="sergio_tavuencas@outlook.com" target="_blank">
          Email
        </a>
      </div>
      <div className="col col-lg-3">
        <a href="https://github.com/sergiotavuencas" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );

  const renderSummary = () => (
    <div className="row py-4 text-start">
      <h3 className="about-section">Resumo</h3>
      <span>
        Olá! Sou o Sérgio, desenvolvedor de software com experiência em back-end
        e interesse crescente em tecnologias full-stack. No momento, estou
        explorando o desenvolvimento web com foco em criar aplicações dinâmicas
        e escaláveis.
      </span>
    </div>
  );

  const renderSkills = () => (
    <div className="row py-4 text-start">
      <h3 className="about-section">Habilidades</h3>
      <div>
        <ul>
          <li>
            <span>
              Back-end: Java, Spring Boot, REST APIs, PostgreSQL, MySQL,
              MongoDB, PHP, Laravel (noções iniciais).
            </span>
          </li>
          <li>
            <span>
              Front-end: JavaScript, HTML, CSS, Bootstrap, e ReactJS (noções
              iniciais).
            </span>
          </li>
          <li>
            <span>Cloud e DevOps: AWS, Docker, Git, BitBucket.</span>
          </li>
          <li>
            <span>
              Metodologias e Arquitetura: Microserviços, Design Patterns, SOLID,
              Arquitetura Hexagonal, Scrum, Kanban.
            </span>
          </li>
          {/* <li>
            <span>
              Idiomas: Português (Nativo), Inglês (Intermediário), Espanhol
              (Básico)
            </span>
          </li> */}
        </ul>
      </div>
    </div>
  );

  const renderRickAndMortyProject = () => (
    <div className="row py-4 text-start">
      <a
        href="https://github.com/sergiotavuencas/teste-vitafor-laravel"
        target="_blank"
      >
        <h4 className="project-name">Aplicação Rick and Morty</h4>
      </a>
      <div>
        <p>
          Este projeto foi desenvolvido para testar minhas habilidades com uma
          stack tecnológica que inclui Laravel, SQLite e ReactJS. A aplicação
          consome dados da API pública de Rick and Morty, permitindo navegar e
          explorar informações de personagens. Funcionalidades implementadas:
        </p>
      </div>
      <div className="project-items">
        <ul>
          <li>
            <span>
              CRUD Completo: Possibilidade de criar, editar e deletar
              personagens no banco de dados local.
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span>
              Consumo de API Externa: Integração com a API do Rick and Morty,
              exibindo personagens, detalhes e informações adicionais.
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span>
              Requisições Assíncronas: Realizadas com JavaScript para uma
              experiência de usuário mais fluida.
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Autenticação Simples: Sistema de login e cadastro.</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const renderTaskManager = () => (
    <div className="row py-4 text-start">
      <a
        href="https://github.com/sergiotavuencas/desafio-simplify"
        target="_blank"
      >
        <h4 className="project-name">Gerenciador de Tarefas</h4>
      </a>
      <div>
        <p>
          Este projeto é uma API REST para gerenciamento de tarefas,
          desenvolvida com Spring Boot e integrada ao banco de dados relacional
          PostgreSQL. As funcionalidades incluem:
        </p>
      </div>
      <div className="project-items">
        <ul>
          <li>
            <span>
              CRUD Completo: Criação, edição e exclusão de tarefas, aplicando os
              princípios de SOLID.
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span>
              Documentação e Testes: API documentada com Swagger e cobertura de
              testes unitários usando JUnit e Mockito.
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span>
              Conteinerização: Utilização de Docker para facilitar a execução e
              a portabilidade da aplicação.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );

  const renderOrderRequest = () => (
    <div className="row py-4 text-start">
      <a
        href="https://github.com/sergiotavuencas/desafio-btg-pactual-orderms"
        target="_blank"
      >
        <h4 className="project-name">Consulta de Pedidos</h4>
      </a>
      <div>
        <p>
          Este microserviço foi desenvolvido para a consulta de pedidos com
          arquitetura baseada em Spring Boot e banco de dados não relacional
          MongoDB. Principais características:
        </p>
      </div>
      <div className="project-items">
        <ul>
          <li>
            <span>
              Processamento Assíncrono: Integração com RabbitMQ para consumo de
              filas, garantindo alta performance e escalabilidade no
              processamento de pedidos.
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span>
              Princípios de SOLID: Aplicação dos princípios de SOLID para
              garantir código estruturado e de fácil manutenção.
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span>
              Conteinerização: Uso de Docker para simplificar a implantação e o
              gerenciamento do ambiente.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );

  const renderTechEvents = () => (
    <div className="row py-4 text-start">
      <a
        href="https://github.com/sergiotavuencas/eventostec-api"
        target="_blank"
      >
        <h4 className="project-name">Eventos Tec</h4>
      </a>
      <div>
        <p>
          Essa aplicação RESTful permite o cadastro de eventos tecnológicos e
          foi construída com Spring Boot, sendo hospedada na AWS.
          Funcionalidades principais incluem:
        </p>
      </div>
      <div className="project-items">
        <ul>
          <li>
            <span>
              Deploy na AWS: Configuração de uma instância EC2 para execução da
              aplicação e banco de dados relacional PostgreSQL via RDS.
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span>
              Armazenamento e Segurança: Armazenamento de arquivos em S3 com
              gerenciamento de permissões utilizando IAM e Secret Manager.
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span>
              Acesso Remoto: Conexão via SSH para testes locais e manutenção.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="About">
      <div className="container py-4 about-content">
        {[renderHeader(), renderContact(), renderSummary(), renderSkills()]}
        <h3 className="about-section">Projetos</h3>
        {[
          renderRickAndMortyProject(),
          renderTaskManager(),
          renderOrderRequest(),
          renderTechEvents(),
        ]}
      </div>
    </div>
  );
}
