import { renderProjects } from './components/projects/project.js';
import initializeSkills from './components/skills/skills.js';

// Adicionar evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Renderizar os projetos
  renderProjects('projects-container');
  
  // Inicializar habilidades (skills)
  initializeSkills();
});
