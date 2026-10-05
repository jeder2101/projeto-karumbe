// Função genérica para abrir qualquer modal pelo ID
function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex"; // Garante que ele apareça centralizado
        document.body.style.overflow = "hidden"; // Trava a barra de rolagem da página de fundo
    }
}

// Função genérica para fechar qualquer modal pelo ID
function fecharModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none"; // Esconde o modal
        document.body.style.overflow = "auto"; // Restaura a rolagem da página
    }
}

// Fecha o modal caso o usuário clique fora da caixa de conteúdo (no fundo escuro)
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
