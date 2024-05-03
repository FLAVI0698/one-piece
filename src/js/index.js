const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem'); 

botoes.forEach((botao, indece) => {
    botao.addEventListener("click", () => {
        const botaoClick = document.querySelector(".botao.selecionado");
        botaoClick.classList.remove("selecionado");

        const personagemClick = document.querySelector(".personagem.selecionado");
        personagemClick.classList.remove("selecionado");

        botao.classList.add("selecionado");
        personagens[indece].classList.add("selecionado");
    });
   
});