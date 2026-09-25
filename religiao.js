// religiao.js - Controle de interatividade por etapas cronológicas

function alternarEtapa(idEtapa) {
    const conteudo = document.getElementById(idEtapa);
    const seta = document.getElementById(`seta-${idEtapa}`);
    
    // Alterna a classe de exibição
    if (conteudo.style.maxHeight && conteudo.style.maxHeight !== "0px") {
        conteudo.style.maxHeight = "0px";
        conteudo.style.paddingTop = "0";
        conteudo.style.paddingBottom = "0";
        seta.style.transform = "rotate(0deg)";
    } else {
        conteudo.style.maxHeight = conteudo.scrollHeight + "px";
        conteudo.style.paddingTop = "15px";
        conteudo.style.paddingBottom = "15px";
        seta.style.transform = "rotate(180deg)";
    }
}

// Inicializa fechando os conteúdos para que o usuário clique para explorar
document.addEventListener("DOMContentLoaded", () => {
    const conteudos = document.querySelectorAll('.etapa-conteudo');
    conteudos.forEach(el => {
        el.style.maxHeight = "0px";
        el.style.overflow = "hidden";
        el.style.transition = "max-height 0.3s ease, padding 0.3s ease";
    });
});
