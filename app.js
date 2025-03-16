const amigos = [];

const inputAmigo = document.querySelector("#amigo");
const listaAmigos = document.querySelector("#listaAmigos");
const resultado = document.querySelector("#resultado");

function adicionarAmigo() {
    const nomeAmigo = inputAmigo.value.trim();
    if (!nomeAmigo) {
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    atualizarLista();
}

function atualizarLista() {
    listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `O amigo secreto é: <strong>${amigoSorteado}</strong>`;
}
