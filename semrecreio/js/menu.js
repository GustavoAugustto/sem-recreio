(function () {
    const botaoMenu = document.getElementById('menuHamburguer');
    const menuMobile = document.getElementById('menuMobile');

    if (!botaoMenu || !menuMobile) return;

    const prefereMovimentoReduzido = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    function abrirMenu() {
        menuMobile.classList.add('aberto');
        botaoMenu.classList.add('ativo');
        botaoMenu.setAttribute('aria-expanded', 'true');
        botaoMenu.setAttribute('aria-label', 'Fechar menu');
        if (!prefereMovimentoReduzido) {
            document.body.style.overflow = 'hidden';
        }
        const primeiroLink = menuMobile.querySelector('a');
        if (primeiroLink) primeiroLink.focus();
    }

    function fecharMenu() {
        menuMobile.classList.remove('aberto');
        botaoMenu.classList.remove('ativo');
        botaoMenu.setAttribute('aria-expanded', 'false');
        botaoMenu.setAttribute('aria-label', 'Abrir menu');
        document.body.style.overflow = '';
    }

    botaoMenu.addEventListener('click', () => {
        const estaAberto = menuMobile.classList.contains('aberto');
        if (estaAberto) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    });

    menuMobile.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => fecharMenu());
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuMobile.classList.contains('aberto')) {
            fecharMenu();
            botaoMenu.focus();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && menuMobile.classList.contains('aberto')) {
            fecharMenu();
        }
    });
})();
