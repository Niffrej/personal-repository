import fetchGitHubProjects from './components/fetchProjects.js';
import renderProjects from './components/renderProjects.js';

document.addEventListener('DOMContentLoaded', async () => {
  const githubUsername = 'Niffrej'; 
  const projectsContainer = document.getElementById('github-projects');

  try {
    const repos = await fetchGitHubProjects(githubUsername);
    renderProjects(repos, projectsContainer);
  } catch {
    projectsContainer.innerHTML = '<p>Erro ao carregar projetos do GitHub. Tente novamente mais tarde.</p>';
  }
});
