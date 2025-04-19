let botao = document.querySelector("#botao");
botao.style.background="green"
botao.addEventListener("click", e => {
    botao.innerHTML = "Você é muito especial!";
});
