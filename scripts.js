(function () {
    "use strict";

    // Dar foco no input ao clicar no icone da lupa
    let iconSearch = document.getElementById('icon-search'),
        inputSearch = document.getElementById('input-search');

    iconSearch.addEventListener('click', function () {
        inputSearch.focus();
    });

    // Verifica se tem scroll na página, se não tiver, o footer é fixado
    function fixedFooter() {
        let footer = document.getElementById('footer');

        if (document.body.clientHeight < window.innerHeight) {
            footer.classList.add('fixed');
        } else {
            footer.classList.remove('fixed');
        }
    }

    fixedFooter();

    window.onscroll = function () {
        fixedFooter();
    }
}());