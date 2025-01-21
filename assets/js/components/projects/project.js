import fetchGitHubProjects from './fetchProjects.js';
import renderProjects from './renderProjects.js';

export default async function initializeProjects() {
  const githubUsername = 'Niffrej';
  const projectsContainer = document.getElementById('projects-container');

  if (!projectsContainer) {
    console.error('Contêiner de projetos não encontrado!');
    return;
  }

  try {
    const repos = await fetchGitHubProjects(githubUsername);
    renderProjects(repos, projectsContainer);
  } catch {
    projectsContainer.innerHTML = '<p>Erro ao carregar projetos do GitHub. Tente novamente mais tarde.</p>';
  }
}
