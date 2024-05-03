// OBJETIVO 1 - Quando clicar no bottão do personagem na lista, marca o botão como selecionado:

// 			PASSO 1 - Pegar os botões no JS pra poder verificar quando o 
//          usuario clicar em cima de um deles.

//Faz com que pegue todas as classes botao 
const botoes = document.querySelectorAll(".botao");

//          PASSO 2 - Adicionar a classe "selecionado" no botão que o 
//          usuario clicou.

//          PASSO 3 - Verificar se já existe um botão selecionado, se sim, 
//          deve ser removido a seleção dele.


//      Fez com que quando pecorrer todos os botoes da lista irá esperar um
//      evento para realizar uma ação.

botoes.forEach((botao, indece) => {
    botao.addEventListener("click", () => { // () => <- isso é uma função

        // PASSO 3
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");

        // PASSO 2
        botao.classList.add("selecionado")
        personagens[indece].classList.add("selecionado")

    });
});

//OBJETIVO 2 - Quando clicar no botão do personagem mostrar as informações 
//		     do personagem:

//			PASSO 1 - Pegar os personagens no JS pra poder mostrar ou 
//				  esconder ele.
//			PASSO 2 - Adicionar a classe "selecionado" no personagem
//				  que o usuario selecinou.
//			PASSO 3 - Verificar se já existe um personagem selecionado, se sim,
//				  deve ser removido a seleção dele.

const personagens = document.querySelectorAll(".personagem")
