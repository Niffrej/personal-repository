import thumbnails from './thumbnails.js';

function renderProjects(repos, container) {
  const projectHTML = repos
    .map(repo => `
      <div class="project-item">
        <img src="${thumbnails[repo.name] || 'img/default-thumbnail.png'}" alt="${repo.name}" class="project-thumbnail">
        <h3>${repo.name}</h3>
        <p>${repo.description || 'Sem descrição disponível'}</p>
        <a href="${repo.html_url}" target="_blank">Ver Projeto</a>
      </div>
    `)
    .join('');

  container.innerHTML = projectHTML;
}

export default renderProjects;
