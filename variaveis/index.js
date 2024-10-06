const apiKey = "SUA_API_KEY"; // Certifique-se de que essa chave é válida
const baseURL = "https://api.themoviedb.org/3";

// Função para buscar filmes populares da API
async function getPopularMovies() {
  try {
    if (!response.ok) {
      // Log de erro se a resposta não for ok

      return []; // Retornar um array vazio em caso de erro
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    // Log do erro caso a requisição falhe
    console.error("Erro ao buscar os filmes populares:", error);
    return []; // Retornar um array vazio em caso de erro
  }
}

// Função para exibir os filmes em destaque
async function showFeaturedMovies() {
  const movies = await getPopularMovies();
  const featuredSection = document.getElementById("featured-movies");

  if (movies && movies.length > 0) {
    // Verifique se a lista de filmes não está vazia
    movies.slice(0, 5).forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie-item");
      movieElement.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            `;
      featuredSection.appendChild(movieElement);
    });
  } else {
    featuredSection.innerHTML = "<p>Nenhum filme disponível no momento.</p>";
  }
}

// Função para exibir o catálogo completo de filmes
async function showCatalogMovies() {
  const movies = await getPopularMovies();
  const catalogSection = document.getElementById("catalog-movies");

  if (movies && movies.length > 0) {
    // Verifique se a lista de filmes não está vazia
    movies.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie-item");
      movieElement.innerHTML = `
                <img src="https://cdn.icon-icons.com/icons2/1189/PNG/512/1490793870-user-interface25_82355.png" alt="${movie.title}">
                <h3>${movie.title}</h3>
            `;
      catalogSection.appendChild(movieElement);
    });
  } else {
    catalogSection.innerHTML = "<p>Nenhum filme disponível no momento.</p>";
  }
}

// Chamar as funções ao carregar a página
window.onload = () => {
  showFeaturedMovies();
  showCatalogMovies();
};
