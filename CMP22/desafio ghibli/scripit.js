const container = document.getElementById('demo')

async function buscarFilmes() {
    try {
  const resposta = await fetch('https://ghibliapi.herokuapp.com/films')
  const json = await resposta.json()
  const filmes = json.data
  const nossosfilmes = filmes.slice(4, 64, 102)
    }
  catch(erro) {
        console.error('Capturei um erro: ', erro)
    }
}