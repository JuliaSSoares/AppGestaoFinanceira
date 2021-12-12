document.getElementById("formulariobar").addEventListener("submit", pesquisarFilme);

function pesquisarFilme(e) {
    var filmePesquisaAux = document.getElementById('searchFilme').value;
    sessionStorage.setItem('filmePesquisa', filmePesquisaAux);
    window.location = 'paginadepesquisa.html';
    buscarfilmes(filmePesquisa);
    e.preventDefault();
}


function buscarfilmes(filmePesquisa){

  axios.get('http://www.omdbapi.com/?apikey=d73b5ad&s=' + filmePesquisa)
    .then(function (response) {
      console.log(response);
      var filmes = response.data.Search;
      var mostrarFilmes = '';

      for(var i = 0; i < filmes.length; i++) {
        mostrarFilmes += `
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <img src="${filmes[i].Poster}" class="img-thumbnail">
                    <h4>${filmes[i].Title}</h4>
                    <p><a href="#" class="btn btn-primary" role="button" onclick="filmeDetalhes('${filmes[i].imdbID}')">Ver Detalhes</a></p>
                </div>
            </div> 
          `; 
      }

      document.getElementById("filmes").innerHTML = mostrarFilmes;
    })
    .catch(function (error) {
      document.write("Erro na sua busca, tente de novo.");
    });
  }

  function filmeDetalhes(id){
    sessionStorage.setItem('filmeID', id);
    window.location = 'detalhes.html';
    return false;
  }

  function mostraFilme() {
    var filmeID = sessionStorage.getItem('filmeID');    
  axios.get('http://www.omdbapi.com/?apikey=d73b5ad&plot=full&i=' + filmeID)
    .then(function (response) {
    var filme = response.data;
    console.log(filme);
    var mostraFilme = `
              <div class="col-md-6">
                  <img src="${filme.Poster}" class="img-responsive">
                      <h3><strong>${filme.Title}</strong></h3>
              </div>
              <div class="col-md-6">
                  <div class="well clearfix">
                  <ul class="list-group">
                      <li class="list-group-item"><strong>Gênero: </strong>${filme.Genre}</li>
                      <li class="list-group-item"><strong>Lançamento: </strong>${filme.Released}</li>
                      <li class="list-group-item"><strong>Duração: </strong>${filme.Runtime}</li>
                      <li class="list-group-item"><strong>Idioma: </strong>${filme.language}</li>
                      <li class="list-group-item"><strong>Prêmios: </strong>${filme.Awards}</li>
                      <li class="list-group-item"><strong>Atores: </strong>${filme.Actors}</li>
                  </ul>

                  <h3>Descrição </h3>
                  ${filme.Plot}
                  <hr>
                  <a href="https://www.imdb.com/title/${filme.imdbID}" target="_blank" class="btn btn-sucess" pull-left"> Ver no IMDB </a>
                  <a href="paginadepesquisa.html" target="_blank" class="btn btn-default" pull-right"> Voltar a pesquisar </a>

                  </div>
              </div>`
    document.getElementById('filmes').innerHTML = mostraFilme;

  })
  .catch(function (error) {
    document.write("Erro na sua busca, tente de novo.");
  });
}