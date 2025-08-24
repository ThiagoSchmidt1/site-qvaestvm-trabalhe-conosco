// Função para mostrar o overlay após envio do formulário
function showOverlayQvaestinho() {
    document.getElementById('overlayQvaestinho').classList.remove('hidden');
}

// Função para fechar o overlay
function closeOverlayQvaestinho() {
    document.getElementById('overlayQvaestinho').classList.add('hidden');
}

// Event listener para o formulário
document.querySelector('.formulario-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aqui você faria o envio real do formulário
    // Depois mostra o overlay
    showOverlayQvaestinho();
});