// Obtém a posição atual do scroll da página
function getScrollPosition() {
    return window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

// Verifica se o menu deve ser exibido ou escondido
function checkMenuVisibility() {
    var menu = document.getElementById('menu');
    var scrollPosition = getScrollPosition();
    if (scrollPosition > 20) {
        menu.classList.add('visible');
    } else {
        menu.classList.remove('visible');
    }
}

// Verifica a visibilidade do menu quando o usuário rolar a página
window.addEventListener('scroll', checkMenuVisibility);

// Cria o botão "Voltar ao topo"
var topButton = document.createElement('button');
topButton.innerHTML = 'Voltar ao topo';
topButton.className = 'top-button';
document.body.appendChild(topButton);

// Adiciona um evento de clique ao botão
topButton.addEventListener('click', function() {
    // Rola a página de volta para o topo
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Verifica se o botão deve ser exibido ou escondido
function checkTopButtonVisibility() {
    var scrollPosition = getScrollPosition();
    if (scrollPosition > 20) {
        topButton.classList.add('visible');
    } else {
        topButton.classList.remove('visible');
    }
}

// Verifica a visibilidade do botão quando o usuário rolar a página
window.addEventListener('scroll', checkTopButtonVisibility);
