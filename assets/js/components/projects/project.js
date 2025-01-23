// Array de projetos
export const projects = [
  {
    name: "Delfino Eventos",
    description: "Buffet Delfino Eventos.",
    image: "assets/img/projects/delfino-eventos.jpg",
    codeUrl: "https://github.com/Niffrej/Delfino-eventos",
    liveUrl: "https://delfino-eventos.vercel.app",
  },
  {
    name: "Landing Page",
    description: "Desafio de criação de landing page moderna, BootCamp DIO.",
    image: "assets/img/projects/desafio-Landing-Page.jpg",
    codeUrl: "https://github.com/Niffrej/desafio-landing-page",
    liveUrl: "https://niffrej.github.io/desafio-Landing-Page/",
  },
  {
    name: "Estacionamento jQuery",
    description: "Aplicação de gestão de estacionamento utilizando jQuery.",
    image: "assets/img/projects/estacionamento-jQuery.jpg",
    codeUrl: "https://github.com/Niffrej/estacionamento-jQuery",
    liveUrl: "https://niffrej.github.io/estacionamento-jQuery/",
  },
  {
    name: "Repositório Pessoal",
    description: "Meu repositório pessoal de aprendizado e experimentos.",
    image: "assets/img/projects/repository.jpg",
    codeUrl: "https://github.com/Niffrej/personal-repository",
    liveUrl: "https://niffrej.github.io/personal-repository/",
  },
  {
    name: "Simple E-commerce (Back-end)",
    description: "API para e-commerce utilizando tecnologias back-end modernas.",
    image: "assets/img/projects/back-end.png",
    codeUrl: "https://github.com/Niffrej/simple-ecommerce",
    liveUrl: "https://github.com/Niffrej/simple-ecommerce",
  },
  {
    name: "Simple E-commerce (Front-end)",
    description: "Interface para e-commerce com foco em design e experiência do usuário.",
    image: "assets/img/projects/simple-ecommerce-front.jpg",
    codeUrl: "https://github.com/Niffrej/simple-ecommerce-front",
    liveUrl: "https://simple-ecommerce-front.vercel.app",
  },
];

// Função para renderizar os projetos
export function renderProjects(containerId) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Contêiner com ID ${containerId} não encontrado.`);
    return;
  }

  const projectHTML = projects
    .map(
      (project) => `
      <div class="project-item">
        <img src="${project.image}" alt="${project.name}" />
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="buttons">
          <a href="${project.codeUrl}" target="_blank" class="code-btn">Código</a>
          <a href="${project.liveUrl}" target="_blank" class="live-btn">Ver Página</a>
        </div>
      </div>
    `
    )
    .join("");

  container.innerHTML = projectHTML;
}
