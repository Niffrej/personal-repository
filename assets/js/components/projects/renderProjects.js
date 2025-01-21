import thumbnails from './thumbnails.js';

function renderProjects(repos, container) {
  const projectHTML = repos
    .map(repo => `
      <div class="project-item">
        <a href="${repo.html_url}" target="_blank">
          <img src="${thumbnails[repo.name] || 'img/default-thumbnail.png'}" alt="${repo.name}" class="project-thumbnail">
        </a>
        <h3>${repo.name}</h3>
        <p>${repo.description || 'Sem descrição disponível'}</p>
      </div>
    `)
    .join('');

  container.innerHTML = projectHTML;
}


export default renderProjects;
