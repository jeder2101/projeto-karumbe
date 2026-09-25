function alternarEtapa(idEtapa) {
    const conteudo = document.getElementById(idEtapa);
    const seta = document.getElementById(`seta-${idEtapa}`);
    
    if (conteudo.style.maxHeight && conteudo.style.maxHeight !== "0px") {
        conteudo.style.maxHeight = "0px";
        conteudo.style.paddingTop = "0";
        conteudo.style.paddingBottom = "0";
        if (seta) seta.style.transform = "rotate(0deg)";
    } else {
        conteudo.style.maxHeight = conteudo.scrollHeight + "px";
        conteudo.style.paddingTop = "10px";
        conteudo.style.paddingBottom = "10px";
        if (seta) seta.style.transform = "rotate(180deg)";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Fecha todos os conteúdos principais e internos ao carregar
    const conteudos = document.querySelectorAll('.etapa-conteudo, .etapa-conteudo-interno');
    conteudos.forEach(el => {
        el.style.maxHeight = "0px";
        el.style.overflow = "hidden";
        el.style.transition = "max-height 0.3s ease, padding 0.3s ease";
        el.style.paddingTop = "0";
        el.style.paddingBottom = "0";
    });
});
