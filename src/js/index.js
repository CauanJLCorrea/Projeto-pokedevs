/*
    OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
    PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
    PASSO 2 - Identificar o evento de clique no elemento da listagem
    PASSO 3 - remover a classe aberto só do cartão que tá aberto
    PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir
    PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
    PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
*/

//PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

// PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        //PASSO 3 - remover a classe aberto só do cartão que tá aberto
        esconderCartao();

        //PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir
        const idPokedevSelecionado = mostrarCartao(pokedev);

        //PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
        desativarClasseAtivo();

        //PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
        ativarClasseAtivo(idPokedevSelecionado);
    })
})

function ativarClasseAtivo(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarClasseAtivo() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartao(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartao() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
