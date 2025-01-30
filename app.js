
  let listaDeNomes = []; 
  function adicionarAmigo() {
    let inputElement = document.getElementById('amigo');
    let novoAmigo = inputElement.value.trim(); 
    if (novoAmigo !== '') {
      listaDeNomes.push(novoAmigo);
      inputElement.value = '';
      atualizarListaDeNomes();
    } else {
      alert('Por favor, insira um nome.');
    }
  } 
  
  let botao = document.querySelector('#novoAmigo');
  botao.addEventListener('click', adicionarAmigo);
  
  
  function atualizarListaDeNomes() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.textContent = `Nomes dos participantes do sorteio: ${listaDeNomes.join(',')}`;
  }
  
  function sortearAmigo() {
  
    let indiceAleatorio = Math.floor(Math.random() * listaDeNomes.length);
    amigoSorteado = listaDeNomes[indiceAleatorio];

    if (amigoSorteado === '') {
      alert('Nenhum amigo foi sorteado ainda.');
    } else {
      let resultadoElement = document.getElementById('resultado');
      resultadoElement.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    };
  };
  
  let botaoSortear = document.querySelector('#sortearAmigo');
  botaoSortear.addEventListener('click', sortearAmigo);
  
