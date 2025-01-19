async function fetchGitHubProjects(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) throw new Error('Erro ao buscar os repositórios');
    const repos = await response.json();
    return repos.filter(repo => !repo.fork); // Ignorar forks
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default fetchGitHubProjects;
